#!/usr/bin/env node
'use strict';

/**
 * Source-level verifier for the canonical lesson.
 *
 * This script deliberately never evaluates lesson code. JavaScript is compiled
 * with vm.Script to catch syntax errors, while corpus data is extracted as JSON
 * and parsed with JSON.parse. That keeps verification deterministic and avoids
 * granting browser-oriented code access to Node, the DOM, or the filesystem.
 */

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = __dirname;
const INDEX_PATH = path.join(ROOT, 'index.html');
const CORPUS_PATH = path.join(ROOT, 'corpus-data.js');
const ACCOUNTING_PATH = path.join(ROOT, 'AI-accounting.md');
const results = [];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function check(name, test) {
  try {
    const detail = test();
    results.push({ ok: true, name, detail: detail || '' });
  } catch (error) {
    results.push({ ok: false, name, detail: error && error.message ? error.message : String(error) });
  }
}

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, number) => String.fromCodePoint(parseInt(number, 10)));
}

function visibleText(html) {
  return decodeEntities(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim();
}

function attrValue(attributes, names) {
  for (const name of names) {
    const pattern = new RegExp('\\b' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\'|([^\\s>]+))', 'i');
    const match = pattern.exec(attributes);
    if (match) return decodeEntities(match[1] ?? match[2] ?? match[3] ?? '');
  }
  return '';
}

function hasClass(attributes, className) {
  const classes = attrValue(attributes, ['class']).split(/\s+/).filter(Boolean);
  return classes.includes(className);
}

function extractSlides(html) {
  const sections = [...html.matchAll(/<section\b([^>]*)>/gi)].map((match) => ({
    attributes: match[1],
    label: attrValue(match[1], ['data-label', 'data-slide-label', 'data-screen-label', 'aria-label']),
    explicit: hasClass(match[1], 'slide') || /\bdata-(?:slide|label|slide-label|screen-label)(?:\s|=|>)/i.test(match[1])
  }));
  const explicit = sections.filter((section) => section.explicit);
  return explicit.length ? explicit : sections;
}

function slideMarkupByLabel(html, label) {
  const pattern = /<section\b([^>]*)>([\s\S]*?)<\/section\s*>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const candidate = attrValue(match[1], ['data-label', 'data-slide-label', 'data-screen-label', 'aria-label']);
    if (candidate.toLowerCase() === label.toLowerCase()) return match[0];
  }
  throw new Error(`Could not find slide labeled “${label}”.`);
}

function extractScripts(html) {
  const scripts = [];
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let match;
  while ((match = pattern.exec(html))) {
    const attributes = match[1];
    scripts.push({
      attributes,
      src: attrValue(attributes, ['src']),
      type: attrValue(attributes, ['type']).toLowerCase(),
      inline: match[2]
    });
  }
  return scripts;
}

function isJavaScriptType(type) {
  return !type || /^(?:text|application)\/(?:java|ecma)script$/i.test(type) || type === 'module';
}

function localScriptPath(src) {
  assert(src, 'External script is missing its src value.');
  assert(!/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(src), `Remote script cannot be source-verified: ${src}`);
  assert(!/^(?:data|blob|javascript):/i.test(src), `Unsafe script URL cannot be source-verified: ${src}`);

  let pathname;
  try {
    pathname = decodeURIComponent(src.split('#')[0].split('?')[0]);
  } catch (_) {
    throw new Error(`Script src is not valid URL text: ${src}`);
  }
  const resolved = path.resolve(ROOT, pathname);
  const relative = path.relative(ROOT, resolved);
  assert(relative && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative), `Script escapes the canonical folder: ${src}`);
  assert(fs.existsSync(resolved), `Referenced script does not exist: ${src}`);

  const rootReal = fs.realpathSync(ROOT);
  const fileReal = fs.realpathSync(resolved);
  const realRelative = path.relative(rootReal, fileReal);
  assert(realRelative && !realRelative.startsWith('..' + path.sep) && !path.isAbsolute(realRelative), `Script symlink escapes the canonical folder: ${src}`);
  return fileReal;
}

function compileClassicJavaScript(source, filename) {
  // Compilation only: vm.Script does not run the source.
  new vm.Script(source, { filename, displayErrors: true });
}

function findJsonObjectAfterAssignment(source, variableName) {
  const assignment = new RegExp('(?:window\\s*\\.\\s*)?' + variableName + '\\s*=').exec(source);
  assert(assignment, `Could not find an assignment to ${variableName}.`);
  const start = source.indexOf('{', assignment.index + assignment[0].length);
  assert(start !== -1, `${variableName} assignment has no JSON object.`);

  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '"') {
      quote = character;
      continue;
    }
    if (character === '{') depth += 1;
    if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        const json = source.slice(start, index + 1);
        try {
          return JSON.parse(json);
        } catch (error) {
          throw new Error(`${variableName} must contain a JSON-compatible object: ${error.message}`);
        }
      }
    }
  }
  throw new Error(`${variableName} JSON object is not closed.`);
}

function tokenize(text) {
  return text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[-‐‑‒–—―]+/g, ' ')
    .match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) || [];
}

function distributionFor(blockTokenLists, context) {
  const contextTokens = tokenize(context);
  const counts = new Map();
  let total = 0;
  for (const tokens of blockTokenLists) {
    for (let index = contextTokens.length; index < tokens.length; index += 1) {
      let matches = true;
      for (let offset = 0; offset < contextTokens.length; offset += 1) {
        if (tokens[index - contextTokens.length + offset] !== contextTokens[offset]) {
          matches = false;
          break;
        }
      }
      if (!matches) continue;
      const next = tokens[index];
      total += 1;
      counts.set(next, (counts.get(next) || 0) + 1);
    }
  }
  return { total, counts };
}

const LADDER_FIXTURES = {
  union: [
    ['the', 575, 'united', 56],
    ['of the', 159, 'united', 38],
    ['the united', 56, 'states', 56],
    ['the united states', 46, 'and', 12]
  ],
  rights: [
    ['people to', 4, 'be', 1],
    ['the people to', 3, 'be', 1],
    ['the right of the people to', 3, 'be', 1],
    ['people to be', 1, 'secure', 1]
  ],
  speech: [
    ['freedom of', 2, 'speech', 1],
    ['the freedom of', 2, 'the', 1],
    ['abridging the freedom of', 1, 'speech', 1],
    ['the press', 2, 'or', 1]
  ]
};

let html = '';
let corpusSource = '';
let corpus = null;
let lessonJavaScript = [];

check('index.html exists and is readable', () => {
  assert(fs.existsSync(INDEX_PATH), `Missing ${INDEX_PATH}`);
  html = readUtf8(INDEX_PATH);
  assert(html.trim(), 'index.html is empty.');
  return `${Buffer.byteLength(html)} bytes`;
});

check('corpus-data.js exists and is readable', () => {
  assert(fs.existsSync(CORPUS_PATH), `Missing ${CORPUS_PATH}`);
  corpusSource = readUtf8(CORPUS_PATH);
  assert(corpusSource.trim(), 'corpus-data.js is empty.');
  return `${Buffer.byteLength(corpusSource)} bytes`;
});

check('HTML has exactly 16 labeled slides', () => {
  assert(html, 'index.html was not available for inspection.');
  const slides = extractSlides(html);
  assert(slides.length === 16, `Expected 16 slides; found ${slides.length}.`);
  const unlabeled = slides.map((slide, index) => slide.label ? '' : String(index + 1)).filter(Boolean);
  assert(!unlabeled.length, `Slides missing data-label/data-slide-label/data-screen-label/aria-label: ${unlabeled.join(', ')}`);
  assert(new Set(slides.map((slide) => slide.label.trim().toLowerCase())).size === 16, 'Slide labels must be unique.');
  return slides.map((slide) => slide.label).join(' · ');
});

check('Slide labels cover the canonical lesson arc', () => {
  assert(html, 'index.html was not available for inspection.');
  const labels = extractSlides(html).map((slide) => slide.label).join(' | ');
  const required = [
    ['title', /title|meaning\s*(?:↔|&harr;|&#8596;)\s*prediction/i],
    ['Long Story Short', /long story short/i],
    ['warm-up debrief', /debrief|protect(?:ed)? words/i],
    ['matrix', /matrix|where are you/i],
    ['sentence', /sentence|different worlds/i],
    ['perspectives', /perspective|seats? in the building/i],
    ['three contexts', /three (?:kinds of )?context/i],
    ['corpus process', /corpus.*(?:process|pipeline|made)|how.*corpus/i],
    ['Prediction Machine', /prediction machine/i],
    ['model bridge', /language model|corpus.*model|model.*corpus/i],
    ['interactive output labeling', /annotat|output label|prompt and output comparison/i],
    ['live A/B generation', /part three|a\s*\/?\s*b|generation/i],
    ['A/B comparison', /part three comparison|compare/i],
    ['room tally', /tally|tries.*counted/i],
    ['close', /close|closing|reflection/i],
    ['AI accounting', /ai accounting|impact|afterword/i]
  ];
  const missing = required.filter(([, pattern]) => !pattern.test(labels)).map(([name]) => name);
  assert(!missing.length, `Missing canonical slide labels: ${missing.join(', ')}. Labels found: ${labels}`);
  return 'all 16 semantic labels found';
});

check('Room-facing revision contracts are visible', () => {
  assert(html, 'index.html was not available for inspection.');
  const text = visibleText(html);
  const warmup = visibleText(slideMarkupByLabel(html, 'Long Story Short'));
  const close = visibleText(slideMarkupByLabel(html, 'Close'));
  assert(!/\b\d{1,2}:\d{2}\s*[–—-]\s*\d{1,2}:\d{2}\b/.test(text), 'A visible time range remains on a slide.');
  assert(!/<button\b[^>]*class\s*=\s*["'][^"']*prompt-copy/i.test(html), 'A prompt copy button remains on the generation slide.');
  assert(/source hidden while we play/i.test(text), 'The corpus-masking cue is missing from the projection.');
  assert(!/external activity|if (?:the )?(?:embed|activity).{0,30}(?:fails?|blank|blocked)/i.test(warmup), 'The removed external-activity warning remains visible on Slide 2.');
  assert(/Open Long Story Short/i.test(warmup), 'The quiet direct-link fallback is missing from Slide 2.');
  for (const required of ['Today', 'People make meaning from words and context.', 'Prediction narrows what can come next.', 'Comparing outputs helps us ask better questions.', 'Keep asking', 'What context is missing?', 'What did the system add?', 'What should we verify or test?', 'Next moves', 'Visit', 'Saber and Danny’s class', 'Try', 'One small A/B comparison', 'Bring back', 'One observation or question']) {
    assert(close.includes(required), `Slide 15 is missing final copy: ${required}`);
  }
  return 'no visible timings, prompt-copy buttons, or Slide 2 warning; quiet fallback and final close present';
});

check('Optional AI-accounting afterword keeps uncertainty, scope, and safeguards visible', () => {
  assert(html, 'index.html was not available for inspection.');
  assert(fs.existsSync(ACCOUNTING_PATH), 'AI-accounting.md is missing beside the canonical deck.');
  const afterwordSource = slideMarkupByLabel(html, 'AI accounting');
  const afterword = visibleText(afterwordSource);
  const accounting = readUtf8(ACCOUNTING_PATH);
  for (const required of [
    'Afterword · optional · estimated, not metered',
    'This deck is also evidence.',
    'Originality has two answers',
    'Direction + judgment',
    'Literal words + code',
    '≈4 active hours',
    'Modeled AI footprint',
    'Two separate scopes. Scenario estimates—not provider telemetry.',
    'This workshop deck',
    '≈1 kWh · 0.35 kg CO₂e · 3–4 L',
    'Spring Gen AI class',
    '≈6 kWh · 2 kg CO₂e · 20 L',
    'Teacher preparation + modeled student use',
    'Class scenario span: 0.8–81 kWh · 0.3–28 kg · 3–280 L.',
    'Video mix and retries dominate; this is not a confidence interval.',
    'National averages per resident—not equivalent footprints.',
    'U.S. 35 kWh/day · Bangladesh 1.7 kWh/day',
    'U.S. 480 L/day · Bangladesh 58 L/day',
    'AI consumption is a different metric.',
    'U.S. 37 kg/day · Bangladesh 1.9 kg/day',
    'The deck’s ≈0.35 kg equals about 14 U.S. minutes or 4½ Bangladesh hours.',
    'Safeguards used',
    'Only de-identified totals were used.',
    'No student work, names, grades, rosters, prompts, or accounts were opened or published.',
    'The deck stores no names, files, or images; reload clears room state.',
    'External tools set their own privacy terms.',
    'Modeled with ≥3× uncertainty.',
    'Slide 15 remains the intended close.'
  ]) {
    assert(afterword.includes(required), `Slide 16 is missing its accounting/safeguard contract: ${required}`);
  }
  assert(/data-notes\s*=\s*["'][^"']*Slide 15 is the real close; stop there unless the room asks/i.test(afterwordSource), 'Slide 16 notes do not preserve Slide 15 as the normal close.');
  assert(/data-notes\s*=\s*["'][^"']*Every environmental number is a scenario estimate, not provider telemetry/i.test(afterwordSource), 'Slide 16 notes do not state the estimation boundary.');
  for (const required of ['98 document submissions', '171 submitted media files', 'video mix and retries dominate', 'No student work, names, grades, rosters, prompts, or accounts were opened or published']) {
    assert(afterwordSource.includes(required), `Slide 16 notes are missing their de-identified class-scenario contract: ${required}`);
  }
  assert(/id\s*=\s*["']slide-counter["'][^>]*>\s*1\s*\/\s*16\s*</i.test(html), 'The persistent counter does not initialize as 1 / 16.');
  for (const phrase of ['The rows are separate scopes', '98 document submissions', '171 submitted media files', 'Video generation and retries dominate', 'not measurements or confidence bounds', 'No underlying student work, names, grades, rosters, prompts, or accounts were opened', 'municipal water withdrawal', 'Privacy and publication safeguards']) {
    assert(accounting.includes(phrase), `AI-accounting.md is missing a public-method caveat: ${phrase}`);
  }
  return 'optional afterword, separate deck/class scenarios, de-identified inputs, uncertainty, scale caveats, safeguards, and 1 / 16 counter found';
});

check('Three lesson parts share a visual grammar and retain distinct identities', () => {
  assert(html, 'index.html was not available for inspection.');
  const slides = extractSlides(html);
  const classes = slides.map((slide) => attrValue(slide.attributes, ['class']));
  [5, 6, 7].forEach((number) => assert(classes[number - 1].split(/\s+/).includes('part-one'), `Slide ${number} must use part-one.`));
  [8, 9, 10, 11].forEach((number) => assert(classes[number - 1].split(/\s+/).includes('part-two'), `Slide ${number} must use part-two.`));
  [12, 13, 14].forEach((number) => assert(classes[number - 1].split(/\s+/).includes('part-three'), `Slide ${number} must use part-three.`));
  [1, 2, 3, 4, 15, 16].forEach((number) => assert(!/\bpart-(?:one|two|three)\b/.test(classes[number - 1]), `Bookend/afterword Slide ${number} must remain outside the three part treatments.`));
  assert(/\.part-one\s*\{[^}]*background-color[^}]*box-shadow/si.test(html), 'Part One shared background/rail styling is missing.');
  assert(/\.part-two[\s\S]{0,100}?\{[^}]*background-color[^}]*box-shadow/si.test(html), 'Part Two shared background/rail styling is missing.');
  assert(/\.part-three\s*\{[^}]*background-color[^}]*box-shadow/si.test(html), 'Part Three shared background/rail styling is missing.');
  return 'Slides 5–7, 8–11, and 12–14 use three related part treatments; close and optional afterword remain outside them';
});

check('Required facilitator controls and ARIA hooks are present', () => {
  assert(html, 'index.html was not available for inspection.');
  const source = decodeEntities(html);
  const requirements = [
    ['previous-slide control', /<(?:button|a)\b[^>]*aria-label\s*=\s*["'][^"']*(?:previous|back)[^"']*["']/i],
    ['next-slide control', /<(?:button|a)\b[^>]*aria-label\s*=\s*["'][^"']*next[^"']*["']/i],
    ['fullscreen control', /<(?:button|a)\b[^>]*aria-label\s*=\s*["'][^"']*full\s*screen[^"']*["']/i],
    ['facilitator-notes control', /<(?:button|a)\b(?=[^>]*aria-(?:expanded|pressed)\s*=)(?=[^>]*aria-(?:controls|label)\s*=)[^>]*>/i],
    ['keyboard-focusable matrix', /<[^>]+(?=[^>]*(?:id|class)\s*=\s*["'][^"']*matrix[^"']*["'])(?=[^>]*tabindex\s*=\s*["']?0["']?)(?=[^>]*aria-label\s*=\s*["'][^"']*(?:familiar|comfort)[^"']*["'])[^>]*>/i],
    ['persona pressed state', /<button\b(?=[^>]*(?:data-persona|class\s*=\s*["'][^"']*persona))(?=[^>]*aria-pressed\s*=)[^>]*>/i],
    ['prediction live region', /<[^>]+(?=[^>]*(?:prediction|distribution|candidates))(?=[^>]*aria-live\s*=)[^>]*>/i],
    ['interactive annotation palette', /<button\b(?=[^>]*data-label-tool)(?=[^>]*aria-pressed\s*=)[^>]*>/i],
    ['prompt-set pressed state', /<button\b(?=[^>]*data-prompt-set)(?=[^>]*aria-pressed\s*=)[^>]*>/i],
    ['labeled tally adjustment', /<button\b[^>]*aria-label\s*=\s*["'][^"']*(?:increase|decrease|add|subtract)[^"']*(?:tally|count|pairs?|images?)[^"']*["']/i]
  ];
  const missing = requirements.filter(([, pattern]) => !pattern.test(source)).map(([name]) => name);
  assert(!missing.length, `Missing controls/ARIA contracts: ${missing.join(', ')}`);
  return `${requirements.length} control/accessibility contracts found`;
});

check('index.html loads corpus-data.js', () => {
  assert(html, 'index.html was not available for inspection.');
  assert(/<script\b[^>]*src\s*=\s*["'][^"']*corpus-data\.js(?:[?#][^"']*)?["']/i.test(html), 'index.html does not reference corpus-data.js.');
  return 'local corpus script referenced';
});

check('Inline and local external JavaScript has valid syntax', () => {
  assert(html, 'index.html was not available for inspection.');
  const scripts = extractScripts(html);
  let compiled = 0;
  scripts.forEach((script, index) => {
    if (!isJavaScriptType(script.type)) return;
    let source = script.inline;
    let filename = `index.html:inline-script-${index + 1}`;
    if (script.src) {
      const filePath = localScriptPath(script.src);
      source = readUtf8(filePath);
      filename = path.relative(ROOT, filePath);
    }
    if (!source.trim()) return;
    assert(script.type !== 'module', `${filename} uses type=module; this verifier requires classic local scripts so it can compile them without execution.`);
    compileClassicJavaScript(source, filename);
    lessonJavaScript.push({ filename, source });
    compiled += 1;
  });
  assert(compiled > 0, 'No JavaScript source was found to syntax-check.');
  return `${compiled} script source${compiled === 1 ? '' : 's'} compiled without execution`;
});

check('Rebuilt interaction state transitions are wired in source', () => {
  const source = lessonJavaScript.map((item) => item.source).join('\n');
  const contracts = [
    ['multi-dot matrix state', /matrixDots\s*:\s*\[\]/],
    ['matrix add', /matrixDots\.push\s*\(\s*dot\s*\)/],
    ['matrix remove', /matrixDots\.splice\s*\(/],
    ['matrix Escape restores slide-navigation focus', /event\.key\s*===\s*["']Escape["'][\s\S]{0,500}getElementById\s*\(\s*["']next-slide["']\s*\)\.focus/],
    ['per-perspective additions', /personaExtras\s*:/],
    ['anchored prediction state', /predictionAnchor\s*:\s*null/],
    ['prediction word append', /predictionWords\.push\s*\(\s*word\s*\)/],
    ['deterministic re-anchor', /currentMatch\s*\|\|\s*supportingMatches\s*\[\s*0\s*\]/],
    ['actual preceding-token reveal', /tokens\s*\[\s*state\.predictionAnchor\.start\s*-\s*1\s*\]/],
    ['prediction undo snapshots', /predictionHistory\.push\s*\(\s*predictionSnapshot\s*\(\s*\)\s*\)/],
    ['new prediction start', /predictionSeed\s*=\s*null/],
    ['interactive annotation state', /annotations\s*:\s*\{/],
    ['prompt-set state', /promptSet\s*:\s*["']leader["']/],
    ['zero-denominator tally guard', /if\s*\(\s*!state\.pairs\s*\)/]
  ];
  const missing = contracts.filter(([, pattern]) => !pattern.test(source)).map(([name]) => name);
  assert(!missing.length, `Missing rebuilt interaction contracts: ${missing.join(', ')}`);
  assert(!/backed off transparently|longest suffix|getPlayableDistribution/i.test(source), 'The removed suffix-backoff mechanism remains in lesson code.');
  return `${contracts.length} feedback-driven state transitions found; no suffix backoff`;
});

check('Final projection copy and interaction disclosure contracts are present', () => {
  assert(html, 'index.html was not available for inspection.');
  const source = lessonJavaScript.map((item) => item.source).join('\n');
  const predictionSource = slideMarkupByLabel(html, 'Prediction Machine');
  const prediction = visibleText(predictionSource);
  const modelSource = slideMarkupByLabel(html, 'Language model comparison');
  const outputComparison = visibleText(slideMarkupByLabel(html, 'Interactive output labeling'));
  const generationSource = slideMarkupByLabel(html, 'Part Three A-B generation');
  const generationText = visibleText(generationSource);
  const comparisonSource = slideMarkupByLabel(html, 'Part Three comparison');
  const comparisonText = visibleText(comparisonSource);

  assert(/Build a phrase that starts to carry meaning/i.test(prediction), 'Slide 9 is missing its meaning-building goal.');
  const frequencyToggle = /<button\b(?=[^>]*id\s*=\s*["']toggle-frequencies["'])(?=[^>]*aria-pressed\s*=\s*["']false["'])(?=[^>]*disabled)[^>]*>\s*Show corpus frequencies\s*<\/button\s*>/i;
  assert(frequencyToggle.test(predictionSource), 'Slide 9 frequency reveal must be disabled and unpressed before a seed is chosen.');
  assert(/predictionFrequenciesVisible\s*:\s*false/.test(source), 'Slide 9 frequency state must default to hidden.');
  assert(/function\s+startPrediction[\s\S]{0,600}predictionFrequenciesVisible\s*=\s*false/.test(source), 'Choosing a seed must restore hidden frequencies.');
  assert(/new-start[\s\S]{0,900}predictionFrequenciesVisible\s*=\s*false/.test(source), 'New start must restore hidden frequencies.');
  assert(/aria-label["']?\s*,?\s*["']Add [“"]?["']?\s*\+\s*word\s*\+\s*["']?[”"]? to the phrase/i.test(source) || /setAttribute\s*\(\s*["']aria-label["']\s*,\s*["']Add [“"]\s*\+\s*word\s*\+\s*["'][”"] to the phrase["']/i.test(source), 'Hidden-mode prediction candidates must expose only the word/action, not statistics.');
  assert(/frequency\.textContent\s*=\s*count\s*\+\s*["'] of ["']\s*\+\s*distribution\.total\s*\+\s*["'] · ["']\s*\+\s*percentLabel/.test(source), 'Revealed candidates must show exact count, denominator, and derived percentage.');
  assert(/percent\s*=\s*distribution\.total\s*\?\s*\(\(count\s*\/\s*distribution\.total\)\s*\*\s*100\)/.test(source), 'Candidate percentages must derive from count divided by exact matches.');
  assert(/Corpus frequency:[\s\S]{0,180}Not model confidence/.test(source), 'Revealed candidate accessible labels must distinguish corpus frequency from model confidence.');
  assert(/Exact corpus frequency—not model confidence\. Only the eight most frequent words are shown\./.test(source), 'Revealed-mode instruction must disclose the top-eight display limit.');
  const frequencyCorpus = findJsonObjectAfterAssignment(corpusSource, 'CONSTITUTION_CORPUS');
  const peopleDistribution = distributionFor(frequencyCorpus.blocks.map((block) => tokenize(block.text)), 'people');
  const peopleOfCount = peopleDistribution.counts.get('of') || 0;
  assert(peopleDistribution.total === 21 && peopleOfCount === 4, `Expected people → of corpus fixture 4 of 21; found ${peopleOfCount} of ${peopleDistribution.total}.`);
  const peopleOfPercent = ((peopleOfCount / peopleDistribution.total) * 100).toFixed(1).replace(/\.0$/, '') + '%';
  assert(peopleOfPercent === '19%', `Expected people → of frequency fixture to format as 4 of 21 · 19%; got ${peopleOfPercent}.`);
  assert(/predictionLastChoice\s*=\s*\{\s*word\s*,\s*count\s*,\s*total/si.test(source), 'Post-choice raw count state is missing.');
  assert(/followed[\s\S]{0,100}choice\.count[\s\S]{0,100}choice\.total[\s\S]{0,80}exact matches/i.test(source), 'Post-choice raw count feedback is missing.');
  assert(/\{\s*id:\s*["']power["'][\s\S]{0,80}word:\s*["']power["']/i.test(source), 'The usable Power starting seed is missing.');
  assert(!/\{\s*id:\s*["']freedom["'][\s\S]{0,80}word:\s*["']freedom["']/i.test(source), 'The one-option Freedom seed remains in the interface.');
  assert(/every exact match of the visible phrase/i.test(prediction), 'Slide 9 does not distinguish the documented starting occurrence from all-match candidate counting.');
  assert(!/\.prediction-actions\s+\.source-control\s*\{[^}]*margin-left\s*:\s*auto/i.test(html), 'Slide 9 source control is still pushed into the fixed bottom-right deck controls.');
  const sourceRevealMatch = /<p\b[^>]*id\s*=\s*["']source-reveal-copy["'][^>]*>([\s\S]*?)<\/p\s*>/i.exec(predictionSource);
  assert(sourceRevealMatch, 'Slide 9 source-reveal copy is missing.');
  const sourceReveal = visibleText(sourceRevealMatch[1]);
  for (const phrase of ['speech, press, privacy, security', 'protections against unreasonable searches', 'world of data']) {
    assert(sourceReveal.includes(phrase), `Slide 9 source reveal is missing the bounded modern inquiry phrase: ${phrase}`);
  }
  assert(!/\bpapers\b|web search|digital-life/i.test(sourceReveal), 'Slide 9 source reveal treats a historical token as a direct modern-technology continuity.');

  const takeawayMatch = /<p\b[^>]*class\s*=\s*["'][^"']*\banalogy-takeaway\b[^"']*["'][^>]*>([\s\S]*?)<\/p\s*>/i.exec(modelSource);
  assert(takeawayMatch, 'Slide 10 projected takeaway is missing.');
  const takeaway = visibleText(takeawayMatch[1]);
  const expectedTakeaway = 'Both narrow possible continuations using the text so far. This machine counts exact matches. A language model uses learned patterns—and can produce fluent text without a matching source passage. That is why fluency still needs verification.';
  assert(takeaway === expectedTakeaway, `Slide 10 takeaway must be exactly the four approved sentences. Found: ${takeaway}`);
  const takeawayParts = [...takeawayMatch[1].matchAll(/<(?:span|strong)\b[^>]*>/gi)].length;
  assert(takeawayParts === 4, `Slide 10 takeaway must contain exactly four projected sentence elements; found ${takeawayParts}.`);

  for (const line of ['What did the prompt say—and what did the system add?', 'Audience task', '1. Point to a phrase → 2. Name your evidence → 3. Label it', 'Prompt gave it', 'Familiar pattern', 'Hard to check', 'New claim', 'Prompts leave gaps. Systems fill them. Next: change one phrase.']) {
    assert(outputComparison.includes(line), `Slide 11 is missing audience-facing purpose/task copy: ${line}`);
  }
  const outputSource = slideMarkupByLabel(html, 'Interactive output labeling');
  assert(/<div\b[^>]*class\s*=\s*["'][^"']*\boutput-heading\b[^"']*["'][^>]*>\s*<h2\b[\s\S]*?<\/h2\s*>\s*<\/div\s*>/i.test(outputSource), 'Slide 11 heading contains an extra subtitle.');
  assert(!/\b(?:output-subtitle|scenario-label|response-instruction|chooser-label)\b/i.test(outputSource), 'Removed Slide 11 subtitle/chooser/response instruction structure remains.');
  assert(/<div\b[^>]*class\s*=\s*["'][^"']*\bresponse-heading\b[^"']*["'][^>]*>\s*<strong>Response<\/strong>\s*<\/div\s*>/i.test(outputSource), 'Slide 11 response heading contains an extra instruction.');
  const labelButtonMarkup = [...outputSource.matchAll(/<button\b[^>]*class\s*=\s*["'][^"']*\blabel-tool\b[^"']*["'][^>]*>([\s\S]*?)<\/button\s*>/gi)];
  assert(labelButtonMarkup.length === 4, `Slide 11 must contain exactly four label buttons; found ${labelButtonMarkup.length}.`);
  labelButtonMarkup.forEach((match) => {
    const buttonText = visibleText(match[1]);
    assert(!/[.!?]\s/.test(buttonText) && buttonText.split(/\s+/).length <= 3, `Slide 11 label button repeats a definition: ${buttonText}`);
  });
  assert(/id\s*=\s*["']annotation-definition["'][^>]*aria-live\s*=\s*["']polite["']/i.test(outputSource), 'Slide 11 shared annotation definition region is missing.');
  assert(/annotation-status[^>]*role\s*=\s*["']status["'][^>]*aria-live\s*=\s*["']polite["']/i.test(html), 'Slide 11 live annotation feedback is missing.');
  assert(/#annotation-status:not\(\.has-result\)[^{]*\{[^}]*position\s*:\s*absolute[^}]*width\s*:\s*1px/si.test(html), 'Slide 11 status is not visually hidden before a fragment result.');
  assert(/setAnnotationStatus\s*\(\s*clearing[\s\S]{0,400}?,\s*true\s*\)/.test(source), 'Slide 11 does not reveal status after a fragment mark/clear result.');

  assert(/data-prompt-set=["']leader["']/.test(generationSource) && /data-prompt-set=["']classroom["']/.test(generationSource), 'Slide 12 must expose both prompt-set controls.');
  assert(/classroom designed for[\s\S]{0,60}instruction/i.test(source) && /classroom designed for[\s\S]{0,60}collaboration/i.test(source), 'The classroom instruction/collaboration prompt pair is missing.');
  for (const line of ['Part three · 1 of 3 · Make', 'Make A and B in the same tool', 'One willing person generates.', 'Use the same tool. Change only the highlighted phrase.', 'Keep A and B visible. Everyone observes.']) {
    assert(generationText.includes(line), `Slide 12 is missing final Make copy: ${line}`);
  }
  for (const line of ['Part three · 2 of 3 · Compare', 'Compare A and B', 'What changed?', 'Name the prompt phrase. Point to what moved—or stayed—in the image.', 'What visual shortcut?', 'Which pose, object, or arrangement makes the idea visible?', 'What can’t it show?', 'Name a limit and a next test. We’ll hear two or three ideas.']) {
    assert(comparisonText.includes(line), `Slide 13 is missing final Compare copy: ${line}`);
  }
  const analysisCards = [...comparisonSource.matchAll(/<div\b[^>]*class\s*=\s*["'][^"']*\banalysis-card\b[^"']*["'][^>]*>/gi)];
  assert(analysisCards.length === 3, `Slide 13 must contain exactly three comparison cards; found ${analysisCards.length}.`);
  assert(!/<(?:button|input|textarea|select)\b/i.test(comparisonSource), 'Slide 13 next-test ideas must remain an oral facilitation move, not a new interface.');

  assert(/\^\[\\s\.,;:!\?\]\+\$/.test(source), 'Punctuation-only output fragments are not routed to plain text.');
  assert(!/["']\s*[,.;:!?]\s*["']\s*[,\]]/.test(source), 'A standalone punctuation fragment remains in scenario data.');
  return 'anchored hidden-by-default prediction with opt-in exact frequencies, bounded source reveal, exact four-sentence model takeaway, explicit Slide 11 audience task, two prompt sets, and punctuation grouping found';
});

check('No browser storage persistence is used', () => {
  const combined = [html, corpusSource, ...lessonJavaScript.map((item) => item.source)].join('\n');
  const matches = combined.match(/\b(?:localStorage|sessionStorage)\b/gi) || [];
  assert(!matches.length, `Found forbidden browser storage reference${matches.length === 1 ? '' : 's'}: ${[...new Set(matches)].join(', ')}`);
  return 'reload starts clean';
});

check('No unpkg, React, ReactDOM, or Babel runtime remains', () => {
  const combined = [html, corpusSource, ...lessonJavaScript.map((item) => item.source)].join('\n');
  const forbidden = [
    ['unpkg', /\bunpkg(?:\.com)?\b/i],
    ['React', /\bReact\b/],
    ['ReactDOM', /\bReactDOM\b/],
    ['Babel', /\bBabel\b/]
  ].filter(([, pattern]) => pattern.test(combined)).map(([name]) => name);
  assert(!forbidden.length, `Forbidden runtime references found: ${forbidden.join(', ')}`);
  return 'vanilla/local runtime contract satisfied';
});

check('Corpus data is JSON-compatible and has required metadata', () => {
  assert(corpusSource, 'corpus-data.js was not available for inspection.');
  corpus = findJsonObjectAfterAssignment(corpusSource, 'CONSTITUTION_CORPUS');
  assert(corpus && typeof corpus === 'object' && !Array.isArray(corpus), 'CONSTITUTION_CORPUS must be an object.');
  assert(corpus.metadata && typeof corpus.metadata === 'object', 'Corpus is missing metadata.');
  assert(Array.isArray(corpus.blocks), 'Corpus is missing its blocks array.');
  const metadata = corpus.metadata;
  for (const field of ['title', 'description', 'boundary', 'blockBoundaryPolicy', 'preparedOn']) {
    assert(typeof metadata[field] === 'string' && metadata[field].trim(), `Corpus metadata.${field} must be a non-empty string.`);
  }
  assert(Array.isArray(metadata.normalization) && metadata.normalization.length, 'Corpus metadata.normalization must be a non-empty array.');
  assert(metadata.blockCount === 157, `Expected metadata.blockCount 157; found ${metadata.blockCount}.`);
  assert(metadata.tokenCount === 6992, `Expected metadata.tokenCount 6992; found ${metadata.tokenCount}.`);
  assert(Array.isArray(metadata.sources) && metadata.sources.length === 4, 'Corpus metadata.sources must identify all four Founding & Rights sources.');
  metadata.sources.forEach((source, index) => {
    for (const field of ['id', 'title', 'url']) {
      assert(typeof source[field] === 'string' && source[field].trim(), `metadata.sources[${index}].${field} is missing.`);
    }
    let url;
    try { url = new URL(source.url); } catch (_) { throw new Error(`metadata.sources[${index}].url is invalid: ${source.url}`); }
    assert(url.protocol === 'https:', `metadata.sources[${index}].url must use HTTPS.`);
  });
  assert(/block/i.test(metadata.boundary + ' ' + metadata.blockBoundaryPolicy), 'Corpus metadata must state that counting respects block boundaries.');
  const normalization = metadata.normalization.join(' ');
  assert(/NFKC/i.test(normalization) && /lower/i.test(normalization), 'Corpus metadata must document NFKC and lowercase normalization.');
  assert(!Number.isNaN(Date.parse(metadata.preparedOn)), `metadata.preparedOn is not a parseable date: ${metadata.preparedOn}`);
  return `${metadata.title}; ${metadata.blockCount} blocks; ${metadata.tokenCount} tokens`;
});

check('Corpus blocks and derived token count match metadata', () => {
  assert(corpus, 'Corpus JSON was not available for inspection.');
  assert(corpus.blocks.length === corpus.metadata.blockCount, `blocks.length is ${corpus.blocks.length}; metadata says ${corpus.metadata.blockCount}.`);
  corpus.blocks.forEach((block, index) => {
    assert(block && typeof block === 'object', `blocks[${index}] is not an object.`);
    assert(typeof block.source === 'string' && block.source, `blocks[${index}].source is missing.`);
    assert((typeof block.sourceLine === 'string' && block.sourceLine) || (Number.isInteger(block.sourceLine) && block.sourceLine > 0), `blocks[${index}].sourceLine is missing or invalid.`);
    assert(typeof block.text === 'string' && block.text.trim(), `blocks[${index}].text is missing.`);
  });
  const tokenCount = corpus.blocks.reduce((sum, block) => sum + tokenize(block.text).length, 0);
  assert(tokenCount === corpus.metadata.tokenCount, `Derived ${tokenCount} tokens; metadata says ${corpus.metadata.tokenCount}.`);
  return `${corpus.blocks.length} independent blocks, ${tokenCount} derived tokens`;
});

for (const [ladderName, fixtures] of Object.entries(LADDER_FIXTURES)) {
  check(`Corpus ladder “${ladderName}” has exact per-block counts`, () => {
    assert(corpus && Array.isArray(corpus.blocks), 'Corpus blocks were not available for inspection.');
    const blocks = corpus.blocks.map((block) => tokenize(block.text));
    const observations = [];
    fixtures.forEach(([context, expectedTotal, target, expectedTargetCount]) => {
      const distribution = distributionFor(blocks, context);
      const actualTargetCount = distribution.counts.get(target) || 0;
      assert(
        distribution.total === expectedTotal && actualTargetCount === expectedTargetCount,
        `Context “${context}” → expected ${expectedTotal} matches and “${target}” ${expectedTargetCount} time(s); found ${distribution.total} and ${actualTargetCount}.`
      );
      observations.push(`${context}: ${actualTargetCount}/${distribution.total}`);
    });
    return observations.join(' · ');
  });
}

check('Tally copy frames results as exploratory, not controlled', () => {
  assert(html, 'index.html was not available for inspection.');
  const text = visibleText(html);
  assert(/explorator/i.test(text), 'Tally/Part Three copy must call the comparison exploratory.');
  assert(/not (?:a )?(?:controlled )?experiment|not controlled/i.test(text), 'Copy must say this is not a controlled experiment.');
  assert(/(?:different|cross[- ]tool).{0,80}(?:tools?|models?)|(?:tools?|models?).{0,80}(?:different|variation)/i.test(text), 'Copy must name cross-tool/model variation.');
  assert(/settings?|random(?:ness)?|variation/i.test(text), 'Copy must name settings/randomness or another source of variation.');
  return 'exploratory limitation is visible';
});

check('Tally uses observable features and neutral interpretation', () => {
  assert(html, 'index.html was not available for inspection.');
  const tallySource = slideMarkupByLabel(html, 'Room tally');
  const text = visibleText(tallySource);
  const source = lessonJavaScript.map((item) => item.source).join('\n');
  const expectedObservations = [
    ['Front or solo setup?', 'Podium, stage, microphone, or one person apart from the group'],
    ['Within-the-group setup?', 'The leader is among others at the same level'],
    ['Front-facing setup?', 'Rows or seats point toward a board or teaching position'],
    ['Peer-group setup?', 'Desks or seats form clusters, a circle, or shared tables']
  ];
  expectedObservations.forEach(([label, help]) => {
    assert(source.includes(`{ label: "${label}", help: "${help}" }`), `Missing exact prompt-set tally observation: ${label} — ${help}`);
  });
  assert(text.includes('Part three · 3 of 3 · Count'), 'Slide 14 is missing its final Count eyebrow.');
  assert(text.includes('What visual shorthand appeared?'), 'Slide 14 is missing its final title.');
  const interpretation = 'A visual shortcut is not the relationship itself. A still image cannot show whether listening, instruction, or collaboration is actually happening.';
  assert(text.includes(interpretation), 'Slide 14 is missing the persistent interpretation guardrail.');
  assert(/tally-feature-description[\s\S]{0,300}promptSet\.observations\.map/.test(source), 'Prompt-set observations do not update the tally feature description.');
  assert(/const\s+observation\s*=\s*promptSet\.observations\s*\[\s*rowIndex\s*\]/.test(source), 'Prompt-set observations do not drive rendered tally row labels and help text.');
  assert(/Count only a clear match; skip unsure\./.test(source), 'Slide 14 is missing the clear-match/skip-unsure tally instruction.');
  const tallyArray = /tally\s*:\s*\[([\s\S]*?)\]\s*\n\s*\}/.exec(source);
  assert(tallyArray, 'Could not inspect tally row state.');
  const rowCount = (tallyArray[1].match(/\{\s*a\s*:\s*0\s*,\s*b\s*:\s*0\s*\}/g) || []).length;
  assert(rowCount === 2, `Expected exactly two tally rows; found ${rowCount}.`);
  assert(!/model-chip|tally-delta|delta-label/i.test(html), 'Removed tool-chip or delta tally UI remains.');
  assert(!/(?:reads as|appears?|apparent)\s+(?:age|\d+|older)|40 or older/i.test(text), 'Subjective apparent-age tally remains in the lesson.');
  assert(!/held steady|shifted when|one word (?:did not )?move(?:d)? it/i.test(text), 'Automatic causal/steady tally verdict language remains.');
  return 'two prompt-specific observable rows, dynamic labels/help, and interpretation guardrail; no tool chips, delta, age, or automatic verdict labels';
});

check('Tally source includes a cap tied to pairs reported', () => {
  const source = lessonJavaScript.map((item) => item.source).join('\n');
  assert(source, 'Lesson JavaScript was not available for tally inspection.');
  const compact = source.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, ' ').replace(/\s+/g, ' ');
  const hasNamedCap = /\b(?:clamp|cap|limit|bound)[A-Za-z0-9_$]*(?:Tally|Count|Pairs|Reported)/i.test(compact);
  const hasMathMinCap = /Math\.min\s*\([^)]*\bpairs?(?:Reported)?\b[^)]*\)|Math\.min\s*\([^)]*\bstate\s*\.\s*pairs\b[^)]*\)/i.test(compact);
  const hasGuard = /(?:count|current|next|value)[A-Za-z0-9_$]*\s*(?:>=|>)\s*(?:state\s*\.\s*)?pairs(?:Reported)?\b/i.test(compact);
  assert(hasNamedCap || hasMathMinCap || hasGuard, 'Could not find source-level evidence that each tally count is capped at pairs reported.');
  return 'count cap found in lesson source';
});

const passed = results.filter((result) => result.ok).length;
const failed = results.length - passed;
for (const result of results) {
  const mark = result.ok ? 'PASS' : 'FAIL';
  console.log(`${mark}  ${result.name}${result.detail ? ` — ${result.detail}` : ''}`);
}
console.log(`\n${failed ? 'FAIL' : 'PASS'}  ${passed}/${results.length} checks passed${failed ? `; ${failed} failed` : ''}.`);
if (failed) process.exitCode = 1;
