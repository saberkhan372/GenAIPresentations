# Meaning ↔ Prediction — public development notes

## Purpose

This presentation is a projection-first lesson for one facilitator and a room of participants. It is intentionally not a self-paced course, learning-management system, or live data dashboard. Most participation happens through journals, conversation, and observation; the webpage holds only the shared visual structure and a few bounded interactions.

The title **Meaning ↔ Prediction** names a reciprocal relationship. Context and meaning shape what seems plausible next; generated continuations return to people for interpretation, verification, and judgment.

## Instructional sequence

The 15-slide lesson has three related parts with a repeated layout and distinct color treatment:

- **Meaning** uses lived and local context to show why the same words can support different interpretations.
- **Prediction** moves from a visible counting pipeline to an interactive exact-match corpus game, then draws a careful boundary between that mechanism and a language model.
- **Investigation** changes one phrase in an image prompt, compares the results, and separates visible shorthand from the relationship or activity an image cannot prove.

Neutral opening and closing slides frame those three parts. Slide counts remain visible; projected time estimates do not.

## Projection and visual system

The deck is authored on a fixed 1920 × 1080 canvas and uniformly scaled to the browser viewport. Internal slide layouts do not reflow. This favors predictable projector composition over phone-sized reading.

The visual system uses a warm cream ground, dark ink, terracotta, olive, and plum accents. Meaning, Prediction, and Investigation reuse the same inset section rail and quiet circular motif while changing background tint. Large type, generous spacing, explicit labels, and pressed states keep color from carrying meaning alone.

Fraunces is the display face and Figtree is the body face when Google Fonts is available. Georgia and system sans-serif fallbacks keep the deck usable without the font request.

## Interaction principles

Interactions are designed for a facilitator standing at one projected computer:

- controls are large and keyboard-aware;
- there are no participant accounts, uploads, or shared-board dependencies;
- state stays in JavaScript memory and clears on reload;
- the facilitator can reveal complexity when the room is ready; and
- room judgment remains visible instead of being replaced by automatic scoring.

### Anonymous room matrix

Participants can privately mark a journal first, then volunteers can add anonymous colored dots to a projected matrix. Blank-space clicks add dots, dragging moves them, and double-clicking removes them. Overlap offers a rough visual sense of concentration, not a calculated heat map or participant record.

### Perspective lists

Student, teacher, administrator, and staff perspectives provide stable comparison points. The facilitator can add a short room-supplied idea to the current list. Additions are local to the page and disappear on reload.

### Prediction Machine

The Prediction Machine uses exact matches inside a small, local corpus. The room chooses a starting word, adds one attested following word at a time, and can reveal an actual preceding word as left context. Every visible phrase remains anchored to a real source occurrence.

Possible next-word buttons show words only by default. A facilitator-controlled **Show corpus frequencies** button can reveal the empirical distribution after the room has first considered the choices. The display uses each candidate’s exact-match count divided by the number of matching contexts, with a percentage for readability. Hiding the values initially protects the prediction question from becoming arithmetic; revealing them later makes the counting method inspectable.

The interface labels the values as **corpus frequencies**, not model probabilities or confidence. They describe this small corpus under an exact tokenizer and cannot be generalized to a language model.

### Prompt/output labeling

The labeling activity shows both a request and a constructed response. Participants point to a phrase, name their evidence, and apply one working label: **Prompt gave it**, **Familiar pattern**, **Hard to check**, or **New claim**. The page accepts disagreement and asks for evidence rather than grading a single correct answer.

Punctuation travels with the phrase it completes. A comma or period is never offered as a separate selectable claim.

### A/B image comparison

Part Three is a room investigation, not a controlled benchmark. One willing participant at a table makes A and B in the same familiar tool and changes only the highlighted phrase. Tools may vary across tables, so tool, model, settings, and randomness remain possible causes.

The room first compares what changed, then names visual shortcuts and what the still image cannot show. The final tally counts two prompt-specific visible arrangements only when they are clear. Its persistent guardrail is that a visual shortcut is not the relationship itself: a still image cannot show whether listening, instruction, or collaboration is actually happening.

## Corpus boundary and counting method

The Founding & Rights corpus spans four National Archives transcriptions from 1776–1791: the Virginia Declaration of Rights, Declaration of Independence, Constitution, and ratified Bill of Rights.

The boundary creates a coherent rights → independence → governing frame → protections arc. It does not imply that every document is 250 years old or that eighteenth-century writers anticipated digital systems. The source reveal instead asks how historical language continues to shape questions about speech, press, privacy, security, and unreasonable searches in a world of data.

Counting is deliberately simple and inspectable:

1. Normalize Unicode and case.
2. Treat hyphens and dashes as word boundaries.
3. Extract word-or-number tokens with optional internal apostrophes.
4. Find exact token sequences inside each prose block.
5. Tally the immediately following token without crossing a block boundary.

There is no stemming, stop-word removal, semantic similarity search, or learned model.

## The analogy boundary

The corpus machine and a language model share one useful abstraction: both use the text so far to narrow possible continuations. Their mechanisms are not equivalent.

The room-facing distinction is:

1. Both narrow possible continuations using the text so far.
2. This machine counts exact matches.
3. A language model uses learned patterns—and can produce fluent text without a matching source passage.
4. That is why fluency still needs verification.

The lesson does not claim that language models never reproduce source text, that every non-matching output is false, or that exact corpus frequencies reproduce model training or generation.

## Privacy and reliability boundaries

The static webpage has no analytics, backend, local storage, session storage, or database. Reloading clears its matrix dots, room-added ideas, Prediction Machine state, labels, prompt selection, and tally.

Network boundaries remain:

- Long Story Short is an external embed with a direct-link fallback.
- Google Fonts is optional; local fallbacks are defined.
- Any image generator used in Part Three is external and has its own account history and data practices.

The lesson should use only generic prompts. Participants should not enter student, personnel, or private school information. Direct model use is optional; observing, recording, questioning, or declining are valid forms of participation.

## Static deployment

The presentation is plain HTML, CSS, and JavaScript. It has no compilation or package-install step. The same files can open locally or be deployed to GitHub Pages through the repository’s Pages workflow.

Before presenting, verify the embed and its direct-link fallback, test the three core interactions, confirm projector fit, and keep a prepared A/B image pair available in case an external image service is slow or unavailable.

The included `verify.js` is a portable, deterministic source-level check that uses only Node.js built-ins. Run it from this folder with `node verify.js`. It complements—but does not replace—a live browser and projector pass.
