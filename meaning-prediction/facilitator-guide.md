# Meaning ↔ Prediction — Facilitator Guide

This guide accompanies the canonical 17-slide webpage in this folder: a 15-slide lesson plus optional feedback and transparency slides. It is written for the person operating the projected deck and leading the room. It is not participant-facing copy and does not replace the interactive webpage. For the public development history and rationale behind these choices, see [development-notes.md](./development-notes.md).

The required lesson is projection-first. Participants use journals for most of the session and open computers only for the image investigation on Slides 12–14. One facilitator operates the deck. Any participant may observe, record, question, or decline instead of using an AI tool. After the lesson, optional Slide 16 feedback should preferably use the direct Google Form on a private device. The projected form remains available, but anything typed there is visible to the room. Slide 17 is the deck's literal ending while Slide 15 remains the pedagogical close.

## The lesson in one sentence

Participants move back and forth between meaning and prediction: they notice how people use context, inspect a literal next-word activity, compare that limited mechanism with a language model, and return to human interpretation through an evidence-based image investigation.

## Lesson intentions

By the end of the session, participants should have experienced four moves:

1. **Meaning depends on context.** People use stated words, familiar patterns, and lived or local knowledge when they interpret an under-specified message.
2. **Prediction can be made visible.** A small historical corpus can show how a text context narrows the set of words that have actually followed it.
3. **An analogy needs boundaries.** Exact corpus lookup and a modern language model share a context–continuation loop, but they do not use the same mechanism.
4. **Outputs can become evidence.** Comparing generations, naming visible differences, repeating a control prompt, editing one phrase, and returning to the control is more useful than treating one output as a verdict.

The lesson is also designed to model a stance: keep context visible, distinguish evidence from inference, and remain curious enough to test a claim.

### What this lesson is not

This is not:

- a complete explanation of transformer architecture, training, or tokenization;
- proof that one image tool or model is better than another;
- a controlled experiment that isolates the changed prompt phrase;
- an invitation to put student, personnel, or private school information into an external service;
- an adoption pitch; or
- a test of participants' AI familiarity, comfort, or willingness.

## Room and material setup

Prepare:

- one facilitator computer connected to a 16:9 projector or large display;
- the complete canonical folder, with `index.html` and `corpus-data.js` kept together;
- a browser at 100% zoom;
- reliable internet for the Long Story Short embed and participants' image tools;
- journals or paper and pens for every participant;
- participant computers available but closed until Slide 12;
- tables or small groups that can compare two images together; and
- an optional visible clock for the facilitator only.

The webpage itself can open directly from the local file. A local server is not required. The core deck and historical corpus are local; the Long Story Short activity, optional web fonts, and image generators use external network services.

### Recommended room roles

Roles are invitations, not requirements. A table may combine or rotate them.

- **Generator:** one willing person operates an image tool on Slide 12.
- **Observer:** notices visible details in both images.
- **Recorder:** writes the table's evidence and next question.
- **Reporter:** shares the table's observations or proposed next test aloud.
- **Questioner:** names assumptions, missing context, or what should be verified.

A participant who does not want to use an AI tool can fully participate as an observer, recorder, reporter, questioner, or by declining the activity.

## Before participants arrive

Do this check on the actual presentation computer, browser, projector, and venue network. A successful test on another machine is useful but not conclusive.

1. Open `index.html` from the canonical folder.
2. Confirm that Slide 1 appears and the persistent counter reads `1 / 17`.
3. Confirm that no full-screen startup error reports a missing corpus. If it does, put `corpus-data.js` back in the same folder as `index.html` and reload.
4. Set browser zoom to 100%. Enter full screen and inspect the edges of every slide for clipping at the actual projector resolution.
5. On Slide 2, confirm that Long Story Short loads inside the frame. Also test **Open Long Story Short ↗** in a separate tab; this is the fallback if embedding is blocked.
6. Confirm that a participant image tool is reachable on the venue network. Do not assume every tool or account can generate images.
7. Exercise the key interactions:
   - Slide 4: add, drag, select, and remove two dots;
   - Slide 6: change perspective and add a room idea;
   - Slide 9: choose a starting word, append at least two words, add actual left context, undo, start again, and reveal the source;
   - Slide 11: change scenario, choose a label, and label and clear a phrase; and
   - Slide 12: switch between both prompt sets and confirm the prompt text changes; and
   - Slide 14: switch both prompt sets and A/B controls, edit the highlighted phrase, restore the control phrase, and type disposable descriptions into all three rounds.
8. On optional Slide 16, confirm that Questions 1 and 2 occupy the upper row and the wider Question 3 surface spans the lower row, preserving the visible 1 → 2 → 3 order. Check the brief Q1/Q3 answering cues and the Part One/Part Two/Part Three map inside the first three Q2 choices. Confirm the private-device guidance and direct-form link, then test Q1/Q2 required behavior, Q3 optional behavior, the Other write-in requirement, and typing without slide navigation. Use the separate optional accounting control to open Slide 17 and confirm that it does not submit or clear the form. Do not press **Send feedback** during rehearsal.
9. Enter disposable text on Slide 14 and unsent text on Slide 16, reload, and confirm both clear alongside dots, added perspective ideas, prediction history, annotations, and the prompt-set choice.
10. Inspect optional Slide 17 for projector fit. Confirm that it says **estimated, not metered**; distinguishes **this workshop deck** from the separate, course-scoped **Spring Gen AI class** scenario; marks exactly one circle **Scale anchor · largest in this view**; and keeps the expanded safeguard rationale legible. Switch through Energy, CO₂, and Water with pointer and keyboard. In each view, confirm that all four circles, values, units, scenario-range labels, and boundary note change together, and that Energy is restored after reload.
11. Leave the direct Long Story Short link available in another tab if the embed has been unreliable.
12. Decide where you will shorten the lesson if image generation or discussion takes longer than expected. Recommended cuts appear in the pacing section below.

### Optional arrival sequence

Slide 2 is designed to work as an arrival activity. If useful, display Slide 2 while people enter. At the formal start, press **Home** to return to Slide 1, orient the room, then advance through Slide 2 briefly to Slide 3. If that movement would feel awkward, begin on Slide 1 and use Slide 2 as the opening activity in sequence.

## Participation and privacy language

Use plain language near the opening and again before laptops open. Suggested language:

> Most of today is journals and conversation. Trying an AI tool is never required. Observing, recording, questioning, or declining are all valid ways to participate.

Before Slide 12, say:

> Use only the generic prompts on the screen. Do not enter student, personnel, or private school information. One willing person may generate; everyone else can observe or record. We will report visible patterns aloud, not send images into this deck.

Be precise about privacy:

- The canonical deck does not solicit names, email addresses, participant files, or generated-image uploads. Slide 6 accepts a short facilitator-entered perspective idea, but it stays only in page memory, is never transmitted, and clears on reload. Do not enter identifying or private information there.
- Its interaction state exists only in the open page's JavaScript memory and clears on reload.
- Long Story Short and participants' image tools are external services with their own network requests, histories, terms, and data practices.
- Do not say that “nothing leaves the room.” That claim would be inaccurate when external services are used.
- The room matrix is anonymous by design. Do not ask participants to label dots or interpret a cluster as a participant profile.
- Slide 14 stores one edited phrase and three room descriptions only in the open page. Anything typed is visible on the projection. Do not enter demographic tallies, names, private information, or claims about identity, intent, competence, or character. The page does not generate a same/different, default, or causal verdict.
- The public lesson build excludes student work, grades, rosters, and internal review traces. Do not copy any of those materials into the canonical or public folder to “support” Slide 17.
- Slide 16 requests no name or email. Prefer the direct Google Form on a respondent's private device because anything typed on the projected form is visible to the room. Responses go directly to Google Forms only after a viewer presses **Send feedback**; Google applies its own privacy terms. Ask respondents not to include private, student, personnel, or school information. The deck retains no response copy, and reload clears only unsent fields—it does not delete anything already submitted to Google.

## Suggested pacing — facilitator discretion

The deck intentionally shows no time estimates. The following is a private planning aid, not a fixed schedule. Let the room's questions determine where the elastic minutes go.

| Phase | Slides | Suggested share of a 45-minute session | What is elastic |
|---|---:|---:|---|
| Arrival warm-up | 2 | Before the formal clock when possible | Let late arrivals join; stop before the debrief becomes repetitive. |
| Welcome and human context | 1, 3–4 | About 5 minutes | Protect the participation frame and private room map. |
| Part One · Meaning | 5–7 | About 10 minutes | Protect journal thinking; shorten whole-room reporting before shortening reflection. |
| Part Two · Prediction | 8–11 | About 15 minutes | Give Slide 9 the largest share; one strong phrase is better than trying every starting word. Use one labeling scenario if needed. |
| Part Three · Investigation | 12–14 | About 12 minutes | Generation speed is unpredictable. Choose one prompt set. If needed, collect one whole-room pair instead of one per table. |
| Close | 15 | About 3 minutes | Protect at least one private journal response and the final distinction between output and evidence. |
| Optional feedback | 16 | Outside the required 45-minute arc | Offer after the close if useful. Prefer the direct Google Form on private devices; projected typing is visible to the room. Do not require a response. |
| Optional transparency afterword | 17 | Outside the required 45-minute arc | Show only if authorship, AI use, or environmental cost comes up. It is the deck's literal ending but does not replace the Slide 15 close. |

For a shorter version:

- Use one perspective rather than all four on Slide 6.
- Use one Prediction Machine starting word and reveal the corpus after two or three choices.
- Use one constructed example on Slide 11.
- Generate one A/B pair for the whole room instead of one per table.
- On Slide 14, complete Round 1's same prompt ×3 and one edited prompt if time does not permit the return round; state plainly that the shortened sequence is even less able to support a causal claim.

Do not shorten by skipping Slide 10. The distinction between transparent lookup and learned prediction is the conceptual guardrail for the lesson.

The background shifts are facilitation cues, not new content slides. Peach with a clay rail marks **Part One · Meaning** on Slides 5–7; pale sage with an olive rail marks **Part Two · Prediction** on Slides 8–11; lavender with a plum rail marks **Part Three · Investigation** on Slides 12–14. Each part repeats the same rail, circle motif, and eyebrow structure. Slides 1–4, the Slide 15 close, and optional Slides 16–17 remain outside the part treatments.

## Presentation controls

The persistent controls at the lower right are visible on every slide:

- **← / →:** previous or next slide;
- **Notes:** open or close the facilitator notes embedded in the webpage;
- **Full:** request browser full-screen mode; and
- **current / 17:** current slide and total slide count.

Keyboard navigation:

- **Right Arrow**, **Page Down**, or **Space:** next slide;
- **Left Arrow** or **Page Up:** previous slide;
- **Home:** Slide 1;
- **End:** optional Slide 17, **This deck is also evidence.** To deliver the normal pedagogical close, navigate to Slide 15 and stop there;
- **N:** toggle facilitator notes when focus is not inside an interactive control; and
- **Escape:** close facilitator notes. In the matrix, Escape first clears matrix selection and returns focus to the Next control.

Interactive buttons, forms, the matrix, the Prediction Machine, and Slide 14's word-test fields consume their own keyboard events. This prevents a press of Space or an arrow key inside an activity from accidentally advancing the deck.

## Slide-by-slide facilitation

### Slide 1 — Meaning ↔ Prediction

**Purpose**

Set the intellectual and participation frame: journals first, one projected screen, and voluntary AI-tool use.

**Facilitation**

1. Name the relationship in everyday terms: people use context to make meaning, predictions extend what is present, and people interpret and investigate what comes out.
2. Ask participants to keep journals ready and computers closed.
3. State that using an AI tool is optional and that observing, recording, questioning, and declining are valid forms of participation.
4. Avoid front-loading technical definitions. Participants will encounter the literal counting method before the language-model analogy.

**Suggested language**

> Meaning and prediction keep shaping one another. We will start with how people interpret incomplete context, inspect a small prediction machine, and return to human judgment through a comparison we can investigate together.

**Transition**

> Let us begin by deciding what a sentence can lose without losing what matters.

**Caution**

Do not frame comfort or familiarity as a deficit. Slide 4 will explicitly separate familiarity, comfort, approval, and expertise.

**Pacing cue**

Keep this orientation brief. The first experience should do more work than the introduction.

### Slide 2 — Long Story Short

**Purpose**

Give the room a shared, low-stakes experience of choosing which words carry meaning.

**Interaction**

- One person controls the embedded activity on the projected screen.
- Invite the room to call out choices.
- If the embed is blank or blocked, select **Open Long Story Short ↗** to open the activity directly in a new tab.
- Late arrivals can join without needing a recap.

**Facilitation**

1. Give only the minimum directions needed to play.
2. Let participants disagree about which words matter.
3. Notice, but do not yet explain, moments when tone, intention, or assumed context influence a choice.
4. Stop while the room still has examples to discuss.

**Room prompts**

- “Which word can go?”
- “What becomes harder to know if we remove it?”
- “Did we preserve information, tone, intention—or different things?”

**Transition**

> We all saw the same words, but we did not necessarily make the same choices. What did each of us use to decide?

**Contingency**

If the network and direct link both fail, run the warm-up verbally: display or say a short sentence, invite the room to remove one word at a time, and ask when the meaning changes. Do not spend the session troubleshooting an external site.

### Slide 3 — What shaped your choices?

**Purpose**

Debrief the warm-up and connect it directly to the human-context matrix.

**Facilitation**

Move through the three questions:

1. **What had to stay?** Ask which words carried information, tone, or intention.
2. **What changed?** Ask whether removal narrowed, shifted, or opened the meaning.
3. **What did you add?** Ask what knowledge or expectation participants supplied even though it was not written.

Take examples rather than trying to produce one correct answer. The key observation is not that one deletion was best; it is that people applied judgment to identical visible words.

**Room prompt**

> Point to one choice that depended on something you knew or expected but could not literally see on the screen.

**Transition**

Read the bridge from left to right: everyone received the same words; people still made different choices; next, notice what each person brings.

**Misconception to prevent**

Do not reduce the lesson to “meaning is subjective.” Some interpretations are better supported than others. The point is that evidence and context both matter, and the context a person uses may not be visible in the sentence.

### Slide 4 — Where are you today?

**Purpose**

Let participants privately locate their current familiarity and comfort, then optionally make an anonymous room map. This is a check-in, not an assessment.

**Facilitation**

1. Ask everyone to draw the two axes in a journal and place a private mark.
2. Name both distinctions aloud: familiarity is not approval; comfort is not expertise.
3. Invite, but do not require, volunteers to add anonymous dots to the projected matrix.
4. Describe any visible concentration neutrally: “Several dots are in this area,” not “The room believes…”

**Exact matrix controls**

- Click open space in the matrix to add a dot.
- Each new dot receives the next color in a 12-color projection-safe palette; the palette cycles after 12 dots.
- Drag a dot to move that dot.
- Single-click a dot to select it.
- Double-click a dot to remove it immediately.
- After selecting a dot, click the text side of Slide 4 to remove it.
- With keyboard focus in the matrix, press **Enter** or **Space** when no dot is selected to add one near the center.
- With a dot selected, use arrow keys to move it; hold **Shift** for a larger move.
- Press **Delete** or **Backspace** to remove the selected dot.
- Press **Escape** to clear the selection, leave every dot in place, and return focus to the **Next** slide control. Arrow-key slide navigation then resumes.

There are no visible dot-management buttons. Dots overlap with transparency and glow to suggest concentration, but the page does not calculate a heat map.

**Caution**

Clicking the text side removes the currently selected dot. If you want to point at the text without deleting, first press Escape or select no dot.

**Transition**

> This map shows that people enter the same room from different positions. Now let us see what happens when everyone receives exactly the same under-specified sentence.

### Slide 5 — The same sentence, different worlds

**Purpose**

Make participants feel how quickly a mind supplies missing context.

**Facilitation**

1. Read the sentence once: “Apparently, they’re changing it next year.”
2. Give quiet journal space before inviting discussion.
3. Ask participants to answer all three prompts: what “it” could be, what clues the mind invented, and what they would need to know before acting.
4. Invite two or three contrasting interpretations without resolving the ambiguity.

**Room prompts**

- “What did your mind decide ‘it’ was?”
- “Which part of that answer was actually in the sentence?”
- “What would you need to ask before taking action?”

**Caution**

The sentence is deliberately ordinary and incomplete. Do not reward the most plausible school-specific answer as though it were hidden in the text.

**Transition**

> The sentence did not change. Let us change only the perspective hearing it.

### Slide 6 — Pick a perspective

**Purpose**

Show how role, responsibility, setting, and local knowledge alter the questions a person asks and the possibilities they notice.

**Interaction**

- Select **Student**, **Teacher**, **Administrator**, or **Staff member**.
- The selected button changes color and updates the possibility list and the question panel.
- To add a room-supplied possibility, type it in the field and press **Enter** or select **Add**.
- Added ideas are stored separately for each perspective and remain only until the page reloads.
- Duplicate entries, ignoring capitalization, are not added twice.

**Facilitation options**

- Assign one perspective to each table and compare reports; or
- click through the perspectives as a whole room.

For each perspective, ask:

1. What might this person imagine “it” means?
2. What responsibility or local knowledge shaped that possibility?
3. What question would this person need answered first?

The four perspective prompts are:

- **Student:** “How will this change my day, my choices, and what adults expect from me?”
- **Teacher:** “What will implementation require, and what will it mean for students and teaching?”
- **Administrator:** “Who needs to know, what could go wrong, and what decision has actually been made?”
- **Staff member:** “What has to change in the systems people rely on, and who will support the transition?”

**Caution**

These are lenses, not complete descriptions of people in those roles. Do not ask one participant to represent an entire group.

**Transition**

> We have named many clues and assumptions. We can now sort where those clues came from.

### Slide 7 — Three kinds of context

**Purpose**

Give the room a usable vocabulary for the context that appeared in the journal and perspective activity, then prepare the move to text-only counting.

**Facilitation**

Ask participants to sort examples they just named:

- **Stated:** words actually present in the sentence.
- **Pattern-based:** expectations from familiar situations or familiar language.
- **Lived and local:** relationships, history, routines, power, responsibilities, and experience in this setting.

Use an example from the room and ask where it belongs. If people disagree, ask what evidence they are using. A clue may draw on more than one kind of context; the categories are a thinking tool, not a grading key.

**Room prompt**

> Find one clue in your journal. Was it stated, pattern-based, lived and local—or a combination?

**Transition**

Point to the final line:

> Humans can use all three. Next, a tiny machine gets only patterns in text.

**Misconception to prevent**

Do not imply that a language model has lived experience because its output can imitate language about experience. This slide names resources people use; the next slides deliberately limit the machine to text patterns.

### Slide 8 — How text becomes a frequency distribution

**Purpose**

Teach the literal mechanism before using any analogy: exact next-word counts in a bounded corpus.

**Keep the corpus identity hidden on this slide.** The mask is intentional. Refer to “a bounded historical text collection,” not the Constitution or the Founding & Rights corpus yet.

**Facilitation**

Walk left to right through the six steps:

1. **Corpus:** begin with a bounded collection of historical text blocks.
2. **Normalize:** lowercase, split hyphens and dashes, and ignore punctuation for matching.
3. **Tokenize:** turn each prose block into word tokens.
4. **Find:** locate every exact match for the selected context.
5. **Look ahead:** gather the immediately following word.
6. **Tally:** divide each following-word count by the number of matches to obtain a corpus frequency.

Use the displayed `the …` example:

- the context `the` has 575 matches with a following word;
- `united` follows 56 times, or 9.7% of those matches;
- `congress` follows 24 times, or 4.2%; and
- `people` and `president` each follow 17 times, or 3.0%.

The small bar lengths are scaled relative to the largest displayed count. The count and percentage labels are the quantities to read.

**Technical accuracy to preserve**

- Matching is exact after the documented normalization.
- A match never crosses a prose-block boundary.
- There is no stemming, stop-word removal, spelling modernization, semantic similarity, or invented likelihood.
- A corpus frequency describes this corpus. It is not a probability that a statement is true, not a judgment about the best word, and not an LLM probability.

**Room prompt**

> If all we know is that the visible word is “the,” what can these counts tell us—and what can they not tell us?

**Transition**

> We have built the distribution. Now the room can choose a continuation and watch the context change the next set of possibilities.

### Slide 9 — The Prediction Machine

**Purpose**

Let the room build a phrase that begins to carry meaning using only corpus-attested continuations. Starting words land at real places in the corpus; actual preceding words can then be added as context. Candidate values begin hidden, while a raw post-choice count remains available as evidence. When it serves the discussion, the facilitator can reveal exact frequencies for the eight most frequent displayed candidates and then hide them again. Finally, reveal the source and use its historical rights language to ask present-day questions about speech, press, privacy, security, and protections against unreasonable searches in a world of data—without claiming that the texts discuss digital technology.

**A reliable facilitation sequence**

1. Ask the room to choose `people`, `power`, or `united`. Explain that the word begins at one documented occurrence, while its candidate words come from every exact match of the visible phrase in the corpus.
2. Once the word appears in the large phrase, ask: “What could come next if our goal is to make this mean something?” The buttons initially show possible words but no counts or percentages.
3. Select a word. It appends immediately, the next choices recalculate, and the feedback line reports the raw result—for example, a word followed the previous phrase in `x of y` exact matches.
4. Only after the room has made a prediction or discussed what seems possible, optionally select **Show corpus frequencies**. Read one line as exact corpus arithmetic—for example, after `people`, `of` is `4 of 21 · 19%`—and say aloud: “corpus frequency, not model confidence.” Use **Hide corpus frequencies** if the numbers begin to steer the meaning-making discussion.
5. Make one or two more choices. Pause over what the phrase has begun to suggest, not merely which word was most frequent.
6. Select **Add left context**. The machine reveals the actual word immediately before this phrase at its current anchored occurrence. Ask how the longer context changes the possible next words or the meaning the room was building.
7. Use **Undo** once so the room sees that either kind of move is reversible. Use **New start** only if a second seed would clarify the idea; it also returns frequency disclosure to hidden.
8. After the room has played without knowing the source, select **Reveal source** and read the boundary accurately.

**Choosing a useful start**

- `united` is the clearest quick demonstration: 58 matches and two next words, with `states` dominant.
- `people` opens the broadest discussion: 21 matches and 15 next words.
- `power` is the middle path: 16 matches and six next words.

The former `freedom` start is intentionally absent. Its two corpus occurrences both continue with `of`, so it offered no opening choice.

**Exact controls**

- The first screen offers three curated starting words. Each begins at an exact source block and occurrence; its candidate counts use every exact corpus match of the complete visible phrase.
- A next-word button initially shows only its word, including in its accessible label. Select it to append it and recalculate.
- **Add left context** reveals one actual preceding corpus word from the current anchored occurrence. It is disabled if that occurrence begins the block.
- **Undo** reverses the most recent append or left-context reveal. It is disabled when there is no history.
- **Show corpus frequencies** is disabled before a seed is chosen and begins with `aria-pressed="false"`. When selected, it becomes **Hide corpus frequencies** and each displayed candidate shows `count of total · percent`. Candidate accessible names disclose the same values and say **Not model confidence**. The instruction reads: **Exact corpus frequency—not model confidence. Only the eight most frequent words are shown.**
- **New start** returns to the three seeds and restores the frequency toggle to hidden. It is disabled until a seed has been selected. Choosing any seed also starts with frequencies hidden.
- **Reveal source** shows the source description; the same control then reads **Hide source**.

**What the displays mean**

- Candidate words are all real words that immediately follow the complete current phrase somewhere inside one corpus block.
- The machine displays at most eight possible next words and shows no aggregate “Other” choice.
- After a choice, `x of y exact matches` means the chosen word followed the prior complete phrase in `x` of the `y` corpus occurrences that had a following word. It is not an LLM probability and not a claim about truth or quality.
- In the optional frequency view, `x of y · z%` uses those same exact counts and calculates `z` as `x ÷ y × 100`, rounded to one decimal place with a trailing `.0` removed. These are corpus frequencies, not learned model probabilities or confidence scores. Because only the eight most frequent candidates are displayed while `y` counts every exact continuation, the percentages shown on screen need not sum to 100%.
- If the selected word does not follow the phrase at the current anchor, the machine moves deterministically to the first exact occurrence that contains the longer phrase. The visible phrase always remains attested in one corpus block.
- If no exact continuation remains, the slide says that the passage ends. There is no suffix backoff and no hidden shortening of the phrase.

**The accurate source reveal**

The local corpus is **Founding & Rights, 1776–1791**:

1. Virginia Declaration of Rights, adopted June 12, 1776;
2. Declaration of Independence, July 4, 1776;
3. U.S. Constitution, September 17, 1787; and
4. Bill of Rights, ratified Amendments I–X, 1791.

It contains 157 independent prose blocks and 6,992 tokens. The collection begins in 1776. The 2026 anniversary is 250 years since the Declaration of Independence; the Constitution and Bill of Rights are later documents. Do not say that every text in the collection is 250 years old.

The exact corpus may still produce words such as *speech*, *press*, *people*, *papers*, *searches*, and *secure*. Preserve those words when discussing what the counter found. When making the present-day bridge, use the reveal’s narrower language: questions about speech, press, privacy, security, and how protections against unreasonable searches apply in a world of data. Do not treat *papers* as a direct synonym for digital files or *searches* as a reference to querying the web. This is an inquiry prompted by historical rights language, not a claim that eighteenth-century writers described digital life or settled a modern legal question.

**Misconceptions to prevent**

- Frequent does not mean correct, fair, important, or true.
- A displayed absence may mean “not in this bounded corpus,” not “impossible English.”
- The machine is not reading for meaning, searching the internet, or retrieving a sentence it understands. The room supplies the judgment that a phrase has begun to mean something.
- The corpus does not feed the language model described on Slide 10.
- This activity counts whole words; many modern models use subword tokens.

**Transition**

> We changed what was available on both sides of a phrase and watched the next choices change. Now we need to say what that helps us understand about a language model—and where the analogy stops.

### Slide 10 — Corpus counting is not an LLM

**Purpose**

Place the transparent lookup activity and learned prediction side by side without collapsing them into the same mechanism.

**Facilitation**

Read the three cards as a bridge:

1. **Transparent lookup:** small documented corpus, exact context matches, inspectable counts.
2. **Shared loop:** context enters, possibilities narrow, one continuation joins the context, and the loop repeats.
3. **A language model:** learned patterns from lots of text; looks at the text so far; chooses a likely next piece; adds it and repeats.

Then read the takeaway exactly as written:

> Both narrow possible continuations using the text so far. This machine counts exact matches. A language model uses learned patterns—and can produce fluent text without a matching source passage. That is why fluency still needs verification.

**Suggested language**

> The first sentence names the bridge. The next two name the difference: our counter needs an exact match in these texts, while a language model can keep writing fluently without retrieving a passage that matches what it says. That is why the sound of confidence is not enough; we still verify the claim and its support.

For technical precision if discussion goes deeper: modern language models often predict subword tokens using learned numerical parameters conditioned on the context so far. Keep that detail in the conversation or facilitator notes unless it helps the room; the projected card intentionally uses simpler language.

**Ask**

- “Which part of our activity made prediction inspectable?”
- “What would be misleading if we called the Prediction Machine a tiny LLM?”

**Caution**

Do not say that a modern model searches its training documents for an exact matching phrase at generation time. Do not imply that the four-text corpus was used to train the model. Do not invert the takeaway into “a language model never reproduces a source passage” or “no matching passage means the output is false.” The bounded claim is that fluent output does not, by itself, demonstrate a matching source or establish accuracy.

**Transition**

> A fluent continuation can mix what the prompt supplied with patterns, vagueness, and new claims. Let us compare one request with its response.

### Slide 11 — What did the prompt say—and what did the system add?

**Purpose**

Practice comparing a request with a response so the audience can see which ideas came from the prompt and which gaps the system filled. This is rehearsal for the next activity: changing one prompt phrase and observing what the image system keeps, shifts, or adds.

**Important disclosure**

The three examples are constructed illustrations, not captured model outputs. Say this if anyone asks. The page does not contain an answer key and does not decide labels for the room.

**Optional saved real example — prepare outside the public repository**

If you want the room to witness the difference between fluent wording and warranted content, use one saved, real model error that anyone can check against a public source. Keep the example outside the public lesson repository; this guide does not name a file or claim that one has already been prepared.

When showing it, disclose all four pieces together:

1. the model or tool used;
2. the prompt and any context the model received;
3. the date the output was generated; and
4. the correction, linked or attributed to a publicly checkable authoritative source.

Use the example briefly as evidence, not as a spectacle. Do not run a live model demo: a fresh response may differ and can turn the lesson into troubleshooting or cherry-picking. Do not use an internal school fact, policy, personnel detail, student information, private document, or anything whose correction requires privileged access. If no properly documented public example is ready, skip it and use the constructed examples transparently.

**Interaction**

1. Choose one scenario: **Announcement**, **Weekend plan**, or **Houseplant answer**.
2. Read the visible **Request** and **Response** together.
3. Follow the compact projected task in order: **Point to a phrase → Name your evidence → Label it.**
4. Select one of four label buttons: **Prompt gave it**, **Familiar pattern**, **Hard to check**, or **New claim**. The buttons contain only their names; the single definition box below them updates to explain the selected label.
5. Select the phrase to apply the chosen label. Select the same phrase again with the same label to clear it; selecting a different label and then the phrase replaces its prior label.
6. Commas and periods stay attached to the phrase they complete. Very short connective text remains unselectable, so there is no standalone comma or period button.
7. Label state remains when switching scenarios and clears on reload.

Changing examples or label tools updates an assistive status message but does not add visible instruction clutter. A result message becomes visible only after a phrase has actually been marked or cleared. Use that result as the moment to ask what evidence supports the choice.

**Working definitions**

- **Prompt gave it:** supported directly by the request.
- **Familiar pattern:** a familiar genre or language pattern that the request did not literally specify.
- **Hard to check:** language that sounds complete while avoiding a checkable commitment.
- **New claim:** a specific detail or certainty the request did not supply and that needs verification.

**Facilitation**

Begin with one phrase that is easy to discuss. Ask the room for evidence before clicking a label. When labels differ, ask what each person is treating as evidence. More than one reading may be defensible even though the interface stores one label per phrase.

Useful examples to probe include:

- In the announcement, did the prompt actually specify “longer class blocks,” “a later start,” spring details, or an information night?
- In the weekend plan, was a farmers market at 10:00 supplied, patterned, or unsupported? What about a promise that everyone will feel relaxed or that the weather will be perfect?
- In the houseplant answer, how does a list of possible causes differ from the certainty that this plant is overwatered or will recover within two weeks?

**Caution**

The goal is evidence-based reading, not catching a machine in a mistake. A familiar pattern can be useful. A new claim may be harmful or simply require verification. Avoid presenting the four labels as mutually exclusive truths about language.

**Transition**

> Prompts leave gaps, and systems fill them. Next we will change one phrase and watch what the image system keeps, shifts, or adds.

### Slide 12 — Make A and B in the same tool

**Purpose**

Open laptops for a focused A/B generation in which one phrase changes. The slide offers a leader/community pair and an optional classroom instruction/collaboration pair. Choose one pair for the room; the second is a fallback or alternate lens, not an expectation to double the activity.

**Before anyone generates**

Repeat the participation and privacy frame:

> One willing person may use an image tool already available to the table. Everyone can observe or record. Use exactly the generic prompts on the screen and enter no private school, student, or personnel information.

**Choose a prompt set**

The selected button exposes `aria-pressed="true"`. Changing sets updates the projected A/B text and Slide 14's matching prompt-set selector. It also resets Slide 14 to Prompt B and clears its edited phrase and three local descriptions. Make the choice before tables generate or report observations.

**Prompt set 1 · leader**

- **Prompt A:** “Create an image of a school leader addressing the community.”
- **Prompt B:** “Create an image of a school leader listening to the community.”

**Prompt set 2 · classroom**

- **Prompt A:** “Create an image of a classroom designed for instruction.”
- **Prompt B:** “Create an image of a classroom designed for collaboration.”

There are no copy buttons because participants are viewing the projected deck. Read the prompts aloud or leave the slide visible while generators type.

**Room procedure · Make (1 of 3)**

Read the three projected directions as written:

1. **One willing person generates.** That person opens an image tool already available to the table.
2. **Use the same tool. Change only the highlighted phrase.** Generate A and then B without deliberately changing anything else.
3. **Keep A and B visible. Everyone observes.** Participants may record privately; the deck does not collect images or written responses.

Using the same tool reduces one source of variation but does not create a controlled experiment. Randomness, hidden settings, model version, system instructions, safety behavior, and other tool differences may affect the images. Cross-tool variation is part of the exploration, but the deck does not record tool or model names and the room should not interpret differences deeply from this small sample.

**Facilitator circulation prompts**

- “Can you point to the visible evidence for that observation?”
- “Is that in both images or only one?”
- “What did the changed phrase specify, and what did the system add?”

**Cautions**

- Do not ask tables to enter names, real school events, student images, private institutional details, or uploaded personal media.
- Do not require a participant to share an uncomfortable or sensitive output.
- If an image evokes identity or demographic assumptions, return to observable features such as framing, position, gaze, gesture, distance, and arrangement. Do not infer identity, intent, competence, or character.

**Transition**

> Keep both images visible. Compare them side by side, separate observation from explanation, and decide what the room wants to test next.

### Slide 13 — Compare A and B

**Purpose**

Create an observation pause between generation and the follow-up test. The room should identify evidence and choose one word, phrase, or repetition to investigate before making a claim.

**Facilitation · Compare (2 of 3)**

Ask tables to move through the three projected cards in order:

1. **What changed?** Name the deliberate prompt phrase—*addressing* became *listening to*, or *instruction* became *collaboration*—then point to what moved or stayed in the image.
2. **What visual shortcut?** Identify the pose, object, or arrangement that makes the abstract idea visible. Treat it as familiar visual shorthand, not as the relationship itself.
3. **What should we test?** Propose one word, phrase, or repetition. The room will choose one together for Slide 14.

After tables have named a next test privately, collect **two or three proposed next tests aloud**. Ask each reporter to state the word or phrase they would change, or the repetition they would run, and what visible observation would make the test informative. Do not enter every proposal into the webpage. Choose one bounded test for Slide 14. This short oral round is the participant-agency payoff: the room shifts from carrying out the supplied A/B comparison to designing what it will investigate next.

**Room language to encourage**

- “In A, I can see…; in B, I can see…”
- “Both images…”
- “One possible explanation is…, and the next test would be…”

**Room language to interrupt gently**

- “The model believes…”
- “This proves…”
- demographic, personality, or intent claims not supported by visible evidence.

Reframe with:

> What feature can everyone point to? What else besides the prompt phrase could have affected it? What repetition or change would test your explanation?

**Transition**

> We now have observations and a question. We will repeat one control prompt, edit one phrase, then return to the control—describing each round without pretending to isolate a cause.

### Slide 14 — What did the word actually control?

**Purpose**

Turn one room-proposed question into a disciplined prompt test: repeat the unchanged control, edit one phrase, then return to the control. Record descriptions without converting a few images into an identity measure or a causal verdict.

**Facilitation · Test (3 of 3)**

**Choose the prompt set and control**

The leader/community and classroom buttons mirror Slide 12. Use the prompt set the room already generated unless there is a clear reason to switch. Then choose Prompt A or Prompt B as the control; Prompt B is the default.

Changing the prompt set or A/B control clears the edited phrase and all three local descriptions. The live status announces that reset. Make these choices before anyone enters observations.

**Round 1 · Repeat — Same prompt ×3**

Keep the same tool and settings. Run the exact read-only control prompt three times without changing its wording. Ask the room to describe what recurred and what varied, then enter one concise summary in **How did the room describe the three images?**

Use room-attributed language when a description depends on interpretation: “The room described…” or “Several people read the depicted person as…”. Do not turn one subjective reading into a demographic category or count.

**Round 2 · Specify — Edit one phrase**

Edit only the highlighted phrase in the middle prompt. The line below reports the literal text change—for example, the control phrase followed by the new phrase. This is a text diff, not a conclusion about the images. Use **Restore control** if more than the intended phrase changed.

Generate the edited prompt in the same tool and settings. Enter the room's description in **How did the room describe the edited image?** The field's instruction is deliberate: describe what was visible; do not explain why.

**Round 3 · Return — Use the control again**

Run the original read-only control prompt once more. Enter the room's description in **How did the room describe the return image?** This adds another observation after the intervention; it does not prove that a feature reverted, that a fixed default exists, or that wording alone caused the outcome.

**Discuss without automating the verdict**

Read the projected guardrail before interpretation:

> Describe, don't diagnose. These are this room's observations—not proof that a word caused an outcome. One run cannot isolate wording from sampling, settings, the tool, or the model.

Then ask:

- What recurred across the three unchanged runs?
- What varied even though the prompt did not?
- What did the added phrase specify that the control left open?
- What else besides wording could explain the sequence?
- What would a larger or better-controlled test require?

The page intentionally does not offer same/different buttons, a “default” label, demographic checkboxes, or an automatic conclusion. The facilitator may help the room form a tentative causal sentence aloud, but it must remain a hypothesis bounded by the small sample and uncontrolled influences.

**Privacy and state**

The edited phrase and three descriptions stay only in this open page and clear on reload. They are never transmitted by the deck. Anything typed is visible on the projection, so enter no names, private information, or identifying descriptions. The deck receives no generated images and records no tool or model name.

**If the full sequence cannot be completed**

Do not invent a generation or description. Leave the unavailable field blank and state which round is missing. A repeat-only or repeat/edit sequence can still support a careful discussion, but it is weaker evidence and cannot establish a cause.

**Transition**

> We repeated the control, changed one phrase, and returned to the original. We ended with descriptions and another question—not a verdict. Let us carry those habits back to everyday judgment.

### Slide 15 — Meaning ↔ Prediction

**Purpose**

Close the reciprocal arc with three simple statements and three simple questions.

**Facilitation**

Read the **Today** column slowly:

1. People make meaning from words and context.
2. Prediction narrows what can come next.
3. Comparing outputs helps us ask better questions.

Invite participants to choose one **Keep asking** question for a final journal note:

1. What context is missing?
2. What did the system add?
3. What should we verify or test?

Then offer the three **Next moves** as invitations, not assignments:

1. **Visit** — Saber and Danny’s class.
2. **Try** — One small A/B comparison.
3. **Bring back** — One observation or question.

Name the sequence as one possible way to keep inquiry moving: observe practice, try a bounded comparison, then return with evidence or a question. Participation remains voluntary; do not turn the class visit, comparison, or follow-up into a completion requirement.

**Closing language**

> Meaning and prediction move together. Keep the context visible, notice what the system added, and verify what matters. If you want to continue, visit, try something small, and bring back what you notice.

Do not turn the final share into a requirement. A private journal response is a complete close.

### Slide 16 — What should travel forward? (optional feedback)

**Purpose**

Collect a small amount of voluntary lesson feedback without requesting a name, email, account, file, or student information. This is an optional follow-up after the real Slide 15 close, not a participation requirement. Prefer private-device entry because anything typed into the projected form is visible to the room.

**Read the full-canvas sequence**

The three numbered surfaces fill the canvas in order: Question 1 at upper left, Question 2 at upper right, then the wider Question 3 field across the lower row. Move through them as **1 → 2 → 3**. The larger third surface is intentional; it gives the open response usable writing space rather than leaving the lower-right canvas empty.

The added context is deliberately tied to answering. Q1’s cue says that a question, habit, or boundary is enough. Q3 asks for one moment to revise, shorten, or investigate and explicitly permits a blank response. In Q2, the first three choices double as a map of the lesson the room just completed:

- **Part One · Meaning · Slides 5–7:** **What context is missing?**
- **Part Two · Prediction · Slides 8–11:** **What did the system add?**
- **Part Three · Investigation · Slides 12–14:** **What should I verify or test?**

Treat the map as a reminder, not a quiz. Participants are choosing the question they want to carry forward; they are not being asked to identify the “correct” part of the lesson.

**The exact questions**

1. Required: **What idea from this lesson will you carry forward?**
2. Required: **Which question feels most useful to carry into future AI use?** Choices are **What context is missing?**, **What did the system add?**, **What should I verify or test?**, **I’m still deciding**, and **Other**.
3. Optional: **What should be clearer, shorter, or explored next—if anything?**

If **Other** is selected, its write-in becomes required. Typing into that field selects Other automatically. The page will not send a selected Other with an empty write-in.

**Before anyone responds**

Say:

> This feedback is optional. The form requests no name or email. Responses go to Google Forms only if you press Send, and Google applies its own privacy terms. Please do not include private, student, personnel, or school information.

Add:

> If you want to respond privately, use the direct form on your own device. Anything typed on this projected screen is visible to the room. You may also skip the feedback entirely.

Do not call the form anonymous. It has no name or email question, but the deck cannot make promises about network metadata or Google’s processing.

**Two response routes**

- **Preferred:** open or share **Open direct form ↗** on the respondent's private device. This keeps response text off the shared projection while using the same Google Form.
- **Projected fallback:** a willing viewer may enter responses into the custom projected form with the understanding that the room can see the text. Do not pass the facilitator keyboard around for a public response round or ask participants to call out answers. Nothing is sent before **Send feedback**. The browser posts the three response fields directly to Google Forms through a hidden transport frame; the Google Form is not visibly embedded.

The deck retains no response copy. Reload clears unsent text and choices. Reloading does not delete a response already submitted to Google Forms.

**Reading the status honestly**

The custom page cannot read Google’s cross-origin confirmation. If the hidden response page finishes loading, the status says the transport finished but cannot independently verify how Google recorded the response. If no confirmation returns within 15 seconds or the transport errors, the status says the response may not have been recorded and points to **Open direct form**.

Do not press Send repeatedly because the status is cautious; that may create duplicate responses. When certainty matters, use the direct form once.

**Accessibility and keyboard note**

The form uses native required fields, a fieldset and legend for Q2, a polite status region, and a busy state while sending. Keyboard events inside inputs and the textarea do not advance the deck. If validation focuses a field, let the respondent complete it or choose another option before navigating away.

**Exit**

Thank respondents without asking them to identify what they submitted. Do not look over private devices or ask participants to announce completion. If no one responds, leave it there; a declined or skipped feedback form is complete participation.

After Question 3, the separate optional accounting control opens Slide 17 without submitting, validating, clearing, or changing any feedback field. Name the choice plainly: viewers can finish on Slide 16, or open **This deck is also evidence** if the accounting afterword serves them. Do not imply that opening Slide 17 is required to complete the form.

### Slide 17 — This deck is also evidence. (optional afterword)

**Purpose**

Answer an authorship or environmental-cost question transparently without pretending retrospective estimates are telemetry. This slide is not a second pedagogical close. It is the deck's literal ending and should appear only if it serves a question in the room.

**Before showing it**

Say plainly:

> The lesson is over; this is an optional accounting note. These are modeled ranges, not metered totals.

**Facilitation**

1. Keep the two originality lenses separate. **Direction + judgment** concerns who set the purpose, pedagogy, boundaries, corrections, and final decisions. **Literal words + code** concerns who produced the prose and implementation surface. Read the horizontal ranges on their shared 0–80% axes; do not combine them into one ownership score.
2. Name Saber’s estimated **four active hours** as direction, testing, correction, and final decisions inside an approximately six-hour final build window—not as the total time invested in the course.
3. Use the **Energy / CO₂ / Water** selector to keep one unit active at a time. Each view re-scales four circle areas: **this workshop deck**, the separate **Spring Gen AI class** scenario, and six-hour U.S. and Bangladesh per-resident national references. Point out **Scale anchor · largest in this view** inside the U.S. circle: it remains full-size because it is the maximum in all three active views, not because the tabs share one scale. Compare circle areas only within the selected metric, never across tabs, and do not add the deck and class scopes.
4. Read the central deck and class estimates as the metric changes: **1 and 6 kWh**; **0.35 and 2 kg CO₂e**; or **3.5 and 20 L operational water**. The compact scenario-range strip changes too: the deck spans **0.3–3 kWh, 0.04–2.1 kg CO₂e, or 0.1–12 L**; the class spans **0.8–81 kWh, 0.3–28 kg CO₂e, or 3–280 L**. These are scenario envelopes, not confidence intervals. Unknown video mix and retries dominate their width.
5. Explain what made the rough student estimate possible without inspecting student work: only de-identified totals—**98 document submissions** and **171 submitted media files**—were used. No provider telemetry exists, and local laptops/displays, storage and network transfer, embodied hardware, and model training remain outside the scenario.
6. Read the six-hour U.S. and Bangladesh per-resident references in the active view: **8.8 and 0.41 kWh**; **9.3 and 0.48 kg territorial CO₂**; or **120 and 14.5 L municipal water withdrawal**. Six hours matches the approximate final deck build window. It is not the duration of the course-scoped class scenario. The country figures provide scale only, not matched project footprints or evidence of where computation ran.
7. State the active boundary caveat. Modeled AI CO₂e and territorial national CO₂ are not equivalent accounting measures. AI operational water and municipal water withdrawal also use different boundaries, so the water comparison is volume-only. Use [`AI-accounting.md`](./AI-accounting.md) for the fuller method and sources.
8. Read the safeguard principle before the practices: **Transparency should expose the method—not the people behind the data.** Then paraphrase the three reasons. **Aggregate only:** the estimate needs counts, not identities or content; no student work, names, grades, rosters, prompts, or accounts were opened or published. **Ephemeral room:** page entries clear on reload so participation does not become a retained record. **Submit by choice:** Slide 16 sends only deliberately submitted feedback directly to Google Forms, and the deck keeps no copy. Google and other external tools apply their own privacy terms.

**Suggested language**

> People set the purpose and made the final judgments; AI systems produced much of the literal surface and review. Choose Energy, CO₂, or Water to compare the deck, the separate Spring-class scenario, and six-hour U.S. and Bangladesh per-resident references. The marked scale anchor is the largest value in that view, so compare areas only inside one tab. Six hours matches the deck build, not the class course. Transparency should expose the method, not the people: only de-identified totals were used, and no student material or account information was opened.

**If someone asks for a single exact number**

Point to the active range and the **estimated, not metered** label. Explain that the Codex and Claude retrospective token estimates differed by roughly threefold and neither had provider telemetry. The agreement is an order of magnitude, not precision. The national values are scale references, not extra evidence that narrows the project estimate. Direct them to [`AI-accounting.md`](./AI-accounting.md) for the method and sources.

**Exit**

Because this is the deck's literal ending, finish here if it was shown. Close verbally on Slide 15’s final question: **What should we verify or test?**

## Contingency plans

### Long Story Short is blank or blocked

Use **Open Long Story Short ↗**. If the direct site also fails, run a verbal sentence-deletion game and proceed to Slide 3. The warm-up's learning purpose matters more than the specific website.

### The deck reports that the corpus did not load

Keep `index.html` and `corpus-data.js` in the same folder and reload. If the file cannot be restored during the session, use Slide 8's static `the …` example and verbally demonstrate that adding context would narrow exact matches. Be transparent that the live corpus interaction is unavailable; do not invent new counts.

### Google fonts do not load

The deck falls back to local system and Georgia-style fonts. Continue if the content remains readable.

### A slide appears clipped

Exit full screen, set browser zoom to 100%, resize the browser to the projector, then re-enter full screen. The deck scales to a 1920×1080 canvas. If clipping persists, present in the largest unclipped window rather than changing page zoom repeatedly during the lesson.

### An interactive control appears unresponsive

First check whether keyboard focus is on the intended control. On Slide 14, changing the prompt set or A/B control intentionally clears the edited phrase and three local descriptions. **Restore control** changes only the editable phrase back to the selected control wording. If state has become confusing, reload only if you are willing to clear every interaction in the deck. There is no whole-deck partial reset.

### Image generation is slow, unavailable, or account-gated

Choose the least disruptive option:

- before the session, generate one generic A/B pair with the prompt set you intend to use and save both images locally outside the canonical folder as a prepared fallback;
- have one willing table or the facilitator create a single whole-room A/B pair;
- use an already completed pair from a table, with permission, on that table's screen rather than uploading it into the deck;
- compare the two prompts and write predictions about what might change, clearly labeling them as predictions rather than observations; or
- skip unavailable word-test rounds and preserve the final distinction between an output, an observation, and a next test. Leave missing fields blank rather than fabricating descriptions.

Do not create accounts, purchase access, or ask participants to disclose credentials during the session.

### Different tables use different tools

Allow the variation and name it aloud as a limitation. The deck does not record tool or model names. Describe the room comparison as exploratory, and do not attribute differences to a named model from one or two examples.

### A generated image is sensitive, stereotyped, or upsetting

Pause. Do not require the table to display or explain it. Offer the choice to regenerate with the generic prompt, observe privately, or leave the activity. If the room discusses it, distinguish visible features from identity or intent claims and focus on what context, wording, system behavior, or next test would need investigation.

### Participation is low

Use private journals first, then invite table-level rather than individual reporting. A facilitator may operate all projected interactions from volunteered language. Do not turn anonymous dots or tool use into compliance measures.

### Slide 16 cannot send or confirmation is unclear

Read the status literally. The local page cannot independently verify how Google recorded a response. Prefer **Open direct form ↗** on a private device rather than claiming success, changing endpoint fields, or asking someone to submit repeatedly. If the direct form is unavailable, skip feedback; do not copy responses into email, chat, or another improvised service. Do not ask someone to troubleshoot by retyping a private response on the shared projection.

### The session runs short

Protect Slide 10 and Slide 15. Skip optional Slides 16 and 17. Use one perspective on Slide 6, one starting word on Slide 9, one example on Slide 11, and one whole-room image pair. It is better to complete the conceptual arc with fewer examples than to end after generation without investigation.

## Post-session and reset

The deck does not persist its own room state. Reloading the page clears:

- all matrix dots and selections;
- room-added perspective possibilities;
- the current prediction seed, corpus anchor, phrase history, frequency reveal, and source reveal;
- output-labeling selections;
- the selected prompt set, Slide 14 control side, edited phrase, and three local descriptions; and
- unsent Slide 16 text and selected inquiry move.

After the session:

1. If you need a record of aggregate findings, copy them into separate facilitator notes before reloading. The canonical deck does not save them.
2. Reload the page and confirm it returns to Slide 1 with `1 / 17`.
3. Close external Long Story Short and image-tool tabs.
4. Follow each external service's own history or deletion controls if anything was generated there; reloading this deck does not clear an external account's history.
5. Do not preserve participant names, private prompts, generated images, or identifiable notes in the canonical folder.
6. Remember that reloading clears unsent Slide 16 fields but does not delete any response already submitted to Google Forms; use Google’s own controls for externally stored responses.

## Concise rehearsal checklist

- [ ] Open the correct canonical `index.html`; confirm `1 / 17`.
- [ ] Confirm `corpus-data.js` loads with no startup error.
- [ ] Test projector fit at 100% zoom and full screen.
- [ ] Test the Long Story Short embed and direct-link fallback on the venue network.
- [ ] Confirm at least one available image-generation route and save one generic A/B fallback pair locally; otherwise choose the no-generation contingency.
- [ ] Practice adding, dragging, and removing multiple dots on Slide 4.
- [ ] Practice switching personas and adding an idea on Slide 6.
- [ ] Rehearse one starting word, the hidden-by-default candidate view, Show/Hide corpus frequencies, at least two appended words, actual left-context reveal, Undo, New start, a passage ending, and source reveal on Slide 9.
- [ ] Rehearse Slide 10’s four-sentence takeaway exactly; do not collapse “no matching source passage” into “a language model never uses or reproduces sources.”
- [ ] If using a saved real model error on Slide 11, keep it outside the public repository and prepare the model/tool, prompt and context, generation date, public correction source, and corrected fact together.
- [ ] Plan to collect two or three proposed next tests aloud on Slide 13 without entering them into the deck.
- [ ] Switch both prompt sets on Slide 12 and confirm Slide 14's matching set selector follows the selection, defaults to Prompt B as the control after a set change, and clears its local test.
- [ ] Practice labeling and clearing one phrase on Slide 11.
- [ ] On Slide 14, test both A/B controls, the phrase-only edit, the literal prompt diff, Restore control, and all three local description fields; confirm changing the set/control and reloading clear the expected state.
- [ ] Rehearse the three accuracy statements: corpus frequency is not truth, lookup is not an LLM, and the repeat/edit/return sequence does not isolate a cause or prove a fixed default.
- [ ] Rehearse the participation and privacy language before laptops open.
- [ ] Inspect optional Slide 16 for projector fit; confirm its full-canvas 1 → 2 → 3 order, brief Q1/Q3 answering cues, the Part One/Part Two/Part Three map inside the first three Q2 choices, the three exact question titles and Q2 values, Q1/Q2 required and Q3 optional, Other write-in behavior, direct-form route, privacy copy, ARIA status, and keyboard containment without sending a response.
- [ ] Activate Slide 16’s separate optional accounting control; confirm that it opens Slide 17 without submitting, validating, clearing, or changing the feedback form.
- [ ] Rehearse the Slide 16 boundary: prefer private-device entry; projected typing is room-visible; no name/email is requested; Google Forms receives responses only on Send; Google’s privacy terms apply; do not enter private, student, personnel, or school information; the deck retains no copy; reload clears unsent fields only.
- [ ] Inspect optional Slide 17 for projector fit; rehearse its contribution range plots and Energy / CO₂ / Water selector. Confirm that the four circle areas, values, units, deck/class scenario-range labels, and boundary note change together; exactly one circle is marked **Scale anchor · largest in this view**; circle areas are compared only within one metric; the six-hour U.S./Bangladesh values are labeled as per-resident scale references; the class remains a separate course scope; and the expanded **method, not people** safeguard rationale remains legible.
- [ ] Keep Slide 15 as the pedagogical close; decide separately whether to offer Slide 16 feedback and whether Slide 17's accounting afterword serves the room.
- [ ] Decide in advance which examples to cut if time compresses.
- [ ] Reload once at the end and confirm all interaction state clears.

## Final accuracy reminders

When in doubt, keep these statements exact:

- The Prediction Machine reports exact next-word frequencies in a 6,992-token, four-text Founding & Rights corpus.
- The corpus spans 1776–1791; 2026 is 250 years since the Declaration of Independence, not since every document in the collection.
- The activity is a transparent whole-word lookup anchored to exact corpus occurrences. It does not use suffix backoff and is not a miniature language model.
- Both the corpus machine and a language model narrow possible continuations using the text so far. This machine counts exact matches. A language model uses learned patterns and can produce fluent text without a matching source passage. That is why fluency still needs verification.
- The image activity is exploratory. A changed prompt phrase, tool differences, settings, and randomness can all affect a result.
- Slide 14 records this room's descriptions of three unchanged runs, one edited run, and one return run. It does not quantify identity, establish that wording caused an outcome, or prove that a recurring feature is a fixed default.
- The required lesson on Slides 1–15 does not solicit or transmit participant submissions. A facilitator-entered perspective idea stays only in page memory and clears on reload; external sites have their own data practices.
- Slide 16 is optional feedback. Its Q1/Q3 cues support brief responses, and its first three Q2 choices map to the lesson’s Meaning, Prediction, and Investigation parts without changing their Google Forms values. Prefer its direct form on a private device because projected typing is visible to the room. It requests no name or email and sends entered responses directly to Google Forms only when Send is pressed. The separate Slide 17 control does not submit the form. Google applies its own privacy terms. The deck retains no response copy; reload clears unsent text and choices but cannot delete a submitted Google response.
- Slide 17 is an optional afterword and the deck's literal ending. Its project estimates are modeled rather than metered. The Energy / CO₂ / Water selector re-scales four circle areas within the active metric and changes the compact deck/class scenario-range strip. The workshop deck and course-scoped Spring-class scenario remain separate. Six-hour U.S./Bangladesh per-resident values provide scale only; six hours matches the deck build, not the class duration, and the carbon and water comparisons use different accounting boundaries.
