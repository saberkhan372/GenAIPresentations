# Meaning ↔ Prediction

**Meaning ↔ Prediction** is a 17-slide, facilitator-led workshop about how context shapes possible continuations—and why fluent generated output still needs interpretation and verification. Slide 15 is the pedagogical close, Slide 16 is optional feedback, and Slide 17 is an optional transparency afterword and the deck's literal ending.

The lesson uses journals and room discussion for most activities. Participants open computers only for an optional, live A/B image-generation comparison near the end.

## Lesson arc

1. **Meaning** — participants notice how lived context and perspective shape interpretation.
2. **Prediction** — a transparent corpus machine counts exact text matches and builds a phrase one word at a time.
3. **Investigation** — the room compares an image-prompt pair, repeats one control prompt, edits one phrase, returns to the control, and records descriptions before making a claim.

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
- On Slide 14, choose Prompt A or B as the control, edit only the highlighted phrase, and record three room-authored outcome descriptions
- On Slide 17, use the Energy, CO₂, and Water tabs to compare one resource at a time

For venue setup and facilitation details, use the [facilitator guide](./facilitator-guide.md).

To run the deterministic source and corpus checks from this folder:

```sh
node verify.js
```

The verifier compiles JavaScript for syntax but does not execute the browser lesson code.

## Privacy and state

The presentation does not request names, emails, files, or generated images. It has no analytics, backend, or browser storage. Interaction state—including Slide 14’s edited phrase and three room-authored descriptions—exists only in the open page and clears on reload. Optional Slide 16 sends only the entered feedback fields directly to Google Forms after a viewer chooses **Send feedback**; the deck retains no copy, and unsent fields clear on reload.

Google Forms, the Long Story Short embed, and any image-generation tools are external services with their own network requests, accounts, terms, and data practices. Participants should not enter student, personnel, or private school information.

## Accuracy boundary

The Prediction Machine displays empirical frequencies from exact matches in a small, inspectable corpus. Its optional frequency reveal is off by default. Those frequencies are not a language model’s probabilities or confidence scores.

The lesson’s central distinction is:

> Both narrow possible continuations using the text so far. This machine counts exact matches. A language model uses learned patterns—and can produce fluent text without a matching source passage. That is why fluency still needs verification.

Slide 14 applies the same caution to images. Its Repeat → Specify → Return sequence records what this room saw; it does not automatically decide whether a word caused an outcome. Sampling, settings, the tool, and the model remain possible explanations.

## Optional feedback and transparency

Slide 16 is optional feedback: **What should travel forward?** Its full-canvas one-two-three layout keeps Questions 1 and 2 above a wider optional Question 3 response. Brief Q1/Q3 cues support concise answers, while the first three Q2 choices visibly map the lesson’s arc—**Part One · Meaning · Slides 5–7**, **Part Two · Prediction · Slides 8–11**, and **Part Three · Investigation · Slides 12–14**—without changing the Google Forms values. A separate optional control opens Slide 17 without validating, submitting, clearing, or changing the feedback form. Slide 16 requests no name or email and sends nothing until a viewer submits. Private-device entry through **Open direct form** is preferable when projected typing would be visible to the room.

Slide 17 is optional transparency: **This deck is also evidence.** It applies the lesson's verification stance to its own production. Two range plots separate direction and judgment from literal words and code. An Energy / CO₂ / Water selector re-scales four circles for the deck, the separate Spring-class scenario, and six-hour U.S. and Bangladesh per-resident references. The largest circle is marked **Scale anchor · largest in this view**, modeled values and scenario ranges stay labeled, and metric-specific boundary caveats remain visible. The expanded safeguard band explains why the deck uses de-identified totals, ephemeral room state, and submit-by-choice feedback: transparency should expose the method, not the people behind the data. See [AI-accounting.md](./AI-accounting.md) for the method, sources, and comparison limits.
