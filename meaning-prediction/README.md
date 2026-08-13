# Meaning ↔ Prediction

**Meaning ↔ Prediction** is a 16-slide, facilitator-led workshop about how context shapes possible continuations—and why fluent generated output still needs interpretation and verification. Slide 15 is the pedagogical close; Slide 16 is an optional transparency afterword.

The lesson uses journals and room discussion for most activities. Participants open computers only for an optional, live A/B image-generation comparison near the end.

## Lesson arc

1. **Meaning** — participants notice how lived context and perspective shape interpretation.
2. **Prediction** — a transparent corpus machine counts exact text matches and builds a phrase one word at a time.
3. **Investigation** — the room changes one phrase in an image prompt, compares outputs, and names both visible patterns and limits.

The title uses a two-way arrow deliberately: meaning shapes what seems likely next, and generated continuations return to people for judgment.

## Files

- `index.html` — the complete projected slide webpage and its interactions
- `corpus-data.js` — the local Founding & Rights corpus used by the Prediction Machine
- `facilitator-guide.md` — setup, slide directions, contingencies, and rehearsal checklist
- `development-notes.md` — public design rationale and implementation boundaries
- `AI-accounting.md` — modeled AI contribution, environmental estimates, uncertainty, and sources
- `verify.js` — portable deterministic checks using only Node.js built-ins
- `NOTICE.md` — source attribution and external-service notes

## Open and present

Open `index.html` directly in a current browser or use the [published presentation](./). A local server and build step are not required.

Useful controls:

- Previous/Next buttons, Left/Right, Page Up/Page Down, or Space — move through slides
- Home/End — jump to the beginning or end
- `N` — toggle facilitator notes
- Escape — close notes or leave matrix interaction mode
- Full — enter browser fullscreen when allowed

For venue setup and facilitation details, use the [facilitator guide](./facilitator-guide.md).

To run the deterministic source and corpus checks from this folder:

```sh
node verify.js
```

The verifier compiles JavaScript for syntax but does not execute the browser lesson code.

## Privacy and state

The presentation does not collect names, emails, files, or generated images. It has no analytics, backend, or browser storage. Interaction state exists only in the open page and clears on reload.

The Long Story Short embed and any image-generation tools are external services with their own network requests, accounts, terms, and data practices. Participants should not enter student, personnel, or private school information.

## Accuracy boundary

The Prediction Machine displays empirical frequencies from exact matches in a small, inspectable corpus. Its optional frequency reveal is off by default. Those frequencies are not a language model’s probabilities or confidence scores.

The lesson’s central distinction is:

> Both narrow possible continuations using the text so far. This machine counts exact matches. A language model uses learned patterns—and can produce fluent text without a matching source passage. That is why fluency still needs verification.

## Optional transparency afterword

Slide 16 applies the lesson's own verification stance to its production. It separates human-led direction and judgment from literal text/code production, reports energy, carbon, and water as modeled ranges rather than measurements, and states what cannot be estimated. See [AI-accounting.md](./AI-accounting.md) for the method, sources, and comparison limits.
