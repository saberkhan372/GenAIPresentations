# AI contribution and environmental accounting

This note documents the optional transparency afterword in Slide 17 of **Meaning ↔ Prediction**. The slide is the deck's literal ending but is not part of the required pedagogical close. Every environmental number is modeled rather than metered and should be treated as an order-of-magnitude estimate with at least threefold uncertainty.

## Headline estimates

| Scope | Inference electricity | CO₂e | Operational water |
|---|---:|---:|---:|
| This workshop deck’s drafts, implementation, review, and deployment | **approximately 1 kWh** (0.3–3) | **approximately 0.35 kg** (0.04–2.1) | **approximately 3.5 L** (0.1–12) |
| Spring Gen AI class: teacher preparation plus a central scenario for student use | **approximately 6 kWh** (scenario span 0.8–81) | **approximately 2 kg** (0.3–28) | **approximately 20 L** (3–280) |

The rows are separate scopes. The Spring course row does not include this workshop deck. Its wide span is a scenario envelope, not a statistical confidence interval.

“Operational water” is the broader modeled water footprint associated with inference, including data-center cooling and—in the wider estimates—water used in electricity generation. Different studies use different boundaries, which is why the range is wide.

## How Slide 17 visualizes the estimates

The projected slide uses two different comparison encodings because authorship ranges and resource amounts have different mathematical meanings:

- contribution is shown as two common-axis range plots. The estimates are independent retrospective lenses and do not form a measured 100% partition, so the slide does not use a pie, donut, or stacked bar;
- an **Energy / CO₂ / Water** selector keeps only one unit active at a time;
- each metric view uses four circles for **this workshop deck**, the separate **Spring Gen AI class** scenario, and six-hour U.S. and Bangladesh per-resident national references. Circle **area** encodes the amount shown in the active view;
- the circles rescale when the metric changes. Their areas are comparable within one selected metric, not across tabs. The largest value in each view is visibly marked **Scale anchor**; the U.S. reference happens to be largest in all three metrics, so its constant maximum diameter is a within-tab denominator—not evidence that the tabs share a scale;
- the water view labels the deck’s central estimate as **approximately 3.5 L**, the same value used to calculate its circle area;
- the compact deck/class scenario-range strip changes with the active metric: 0.3–3 kWh and 0.8–81 kWh; 0.04–2.1 kg CO₂e and 0.3–28 kg CO₂e; or 0.1–12 L and 3–280 L. These ranges are scenario envelopes, not confidence intervals; and
- the national references use the same six-hour interval as the approximately six-hour final deck build. That interval does not describe the duration of the course-scoped Spring-class scenario.

The national figures provide scale only. They are not matched project footprints, locations, opportunity costs, or evidence of where computation ran. The carbon view compares modeled AI CO₂e with territorial national CO₂, and the water view compares modeled AI operational water with municipal water withdrawal; those accounting boundaries are not equivalent.

## Student-use scenario

No provider telemetry exists for student use. The scenario uses only two de-identified aggregate activity counts already reported in the accounting record: **98 document submissions** and **171 submitted media files**. No underlying student work, names, grades, rosters, prompts, or accounts were opened for this estimate.

The central scenario assumes 10 mixed text turns per document submission and four generation attempts per submitted media file, with 85% image and 15% short-video attempts. Published task benchmarks then yield approximately **5.2 kWh** for student inference. Adding approximately **0.5 kWh** for modeled teacher preparation gives **5.7 kWh**, rounded on the slide to **6 kWh**. A U.S.-average physical-grid factor of approximately 0.35 kg CO₂e/kWh and a broad operational-water factor of 3.5 L/kWh produce the rounded **2 kg CO₂e** and **20 L** values.

The scenario envelope is:

| Scenario | Key assumptions | Energy | CO₂e | Operational water |
|---|---|---:|---:|---:|
| Low | 3 ordinary text turns per document; 1 image-equivalent attempt per media file | 0.8 kWh | 0.3 kg | 3 L |
| Central | 10 mixed text turns per document; 4 attempts per media file; 15% short video | 5.7 kWh | 2 kg | 20 L |
| High | 30 long-reasoning turns per document; 8 attempts per media file; 40% high-energy short video | 81 kWh | 28 kg | 280 L |

Video generation and retries dominate the width. The scenarios are illustrative, not measurements or confidence bounds. Local laptops/displays, storage and network transfer, embodied hardware, and model training are excluded.

Stored file size cannot be converted into energy because it does not identify:

- the number of generation attempts or discarded outputs;
- image versus video mix;
- model, hardware, location, or date;
- resolution, duration, frame rate, or sampling settings; or
- provider serving and cooling efficiency.

The reported 784 MB is therefore not used as a compute multiplier.

## Why these figures are ranges

Two independent retrospective estimates used different approaches:

- the Codex estimate inferred roughly 2.5–7 million processed tokens and approximately 100–300 substantial inference segments;
- the Claude estimate inferred roughly 9–22 million processed tokens and approximately 1,700–8,000 median-query equivalents.

Neither system had provider telemetry. The token estimates differ by roughly threefold at their central values, but both approaches place the workshop-deck build near the same order of magnitude. Slide 17 reports a rounded midpoint and preserves the wider uncertainty range.

Recent reference measurements also vary by workload:

- Google reports **0.24 Wh, 0.03 gCO₂e, and 0.26 mL water** for a median Gemini Apps text prompt, including host systems, idle capacity, and facility overhead.
- OpenAI’s CEO reports **0.34 Wh and approximately 0.32 mL water** for an average ChatGPT query, without a published model breakdown or calculation method.
- A 2026 *Joule* study estimates an optimized ordinary frontier-model query at a median **0.31 Wh**, while a long reasoning query rises to a median **3.91 Wh**.

This project used long context, tool calls, repeated revision, and multiple specialist workstreams. Multiplying the visible chat count by an ordinary-prompt average would therefore understate the work.

## Creativity and originality

Authorship changes depending on what is counted. Slide 17 keeps two lenses separate rather than presenting one ownership score.

| Lens | Saber | OpenAI Codex/ChatGPT | Anthropic Claude |
|---|---:|---:|---:|
| Direction and judgment | 65–75% | 15–25% | 8–15% |
| Literal words and code | 5–10% | 50–60% | 35–45% |

These are retrospective estimates, not telemetry. They mean:

- Saber established the audience, purpose, pedagogical sequence, participation and privacy boundaries, interaction requirements, and final acceptance decisions; repeatedly tested the deck; and corrected failures.
- Codex performed most of the canonical implementation, corpus work, documentation, verification, and public deployment preparation.
- Claude contributed early prototypes and a substantial independent-review layer that identified defects not represented in the builder’s original checks.

Saber contributed an estimated **three to five active hours**, with about **four hours** as the midpoint, inside the approximately six-hour final build-and-review window. Earlier course planning, teaching, and preparation are outside that session estimate.

## U.S. and Bangladesh six-hour scale comparisons

These comparisons provide scale. They do **not** identify where this project’s computation ran, imply equal access or living conditions, or compare equivalent environmental accounting boundaries.

The six-hour reference matches the approximate final build-and-review window for this workshop deck. It is not the duration of the Spring Gen AI class scenario, which represents course-scoped teacher preparation and modeled student use. The national values are per-resident averages calculated as one quarter of a daily value—or equivalently, an annual value divided by 1,460 six-hour periods. They are not household-only estimates.

| Active metric | This workshop deck | Spring Gen AI class | U.S. per resident · 6 hours | Bangladesh per resident · 6 hours |
|---|---:|---:|---:|---:|
| Energy | **approximately 1 kWh** | **approximately 6 kWh** | **approximately 8.8 kWh** | **approximately 0.41 kWh** |
| Carbon | **approximately 0.35 kg CO₂e** | **approximately 2 kg CO₂e** | **approximately 9.3 kg territorial CO₂** | **approximately 0.48 kg territorial CO₂** |
| Water | **approximately 3.5 L operational water** | **approximately 20 L operational water** | **approximately 120 L municipal withdrawal** | **approximately 14.5 L municipal withdrawal** |

Circle areas on Slide 17 are recalculated within each row of this table. A circle in one metric view should not be visually compared with a circle in another.

### Electricity

World Bank/IEA electric-power consumption allocates total national electricity consumption across the population. It is not household-only consumption.

- United States: approximately **12,835 kWh per person per year** in 2024, or **8.8 kWh per six hours**.
- Bangladesh: approximately **603 kWh per person per year** in 2023, or **0.41 kWh per six hours**.

### Water

World Bank/FAO AQUASTAT data imply approximate municipal water withdrawal of:

- United States: **480 L per person per day**, or **120 L per six hours**;
- Bangladesh: **58 L per person per day**, or **14.5 L per six hours**.

Municipal withdrawal includes public-network uses and is not the same measure as AI operational water consumption. This is a **volume-only** scale reference. Do not interpret it as a location, opportunity cost, or matched water footprint.

### Carbon dioxide

World Bank country profiles report 2024 territorial carbon-dioxide emissions excluding land-use change of approximately:

- United States: **13.6 t CO₂ per person per year**, or **9.3 kg per six hours**;
- Bangladesh: **0.7 t CO₂ per person per year**, or **0.48 kg per six hours**.

These territorial CO₂ values do not share the modeled AI estimate’s CO₂e boundary. They are scale references only, not matched life-cycle footprints or claims about the computation’s location.

## Privacy and publication safeguards

The purpose is methodological as well as procedural: transparency should expose how the estimate was constructed without creating a new record of the people behind the activity totals.

The published lesson follows these boundaries:

- only de-identified activity totals informed the class estimate; no underlying student work, names, grades, rosters, prompts, or accounts were opened or published;
- student work, grades, rosters, and internal review traces are excluded from the public repository;
- the slide webpage does not solicit or upload participant names, files, or generated images;
- room interactions remain in page memory and clear on reload, so participation does not become a retained deck record;
- optional Slide 16 sends only feedback a viewer chooses to submit directly to Google Forms; the deck retains no response copy;
- the corpus is local and makes no runtime archive request;
- direct participant AI use is optional;
- generic prompts are used instead of private school, student, or personnel information; and
- Google Forms, the Long Story Short embed, Google Fonts, and image-generation services are external and retain their own terms, accounts, histories, and data practices.

The lesson code itself has no analytics, backend, account system, or persistent browser storage. That statement does not extend to externally embedded or linked services.

## Sources

- Felipe Oviedo et al., “Energy use of AI inference, efficiency pathways, and test-time scaling,” *Joule* (2026): <https://www.sciencedirect.com/science/article/pii/S2542435126001145>
- Google Cloud, “How much energy does Google’s AI use? We did the math” (2025): <https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/>
- Sam Altman, “The Gentle Singularity” (2025): <https://blog.samaltman.com/the-gentle-singularity>
- U.S. EPA, eGRID summary data: <https://www.epa.gov/egrid/summary-data>
- Microsoft, fleet water-use effectiveness report (2026): <https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/>
- Pengfei Li et al., “Making AI Less Thirsty” (revised 2025): <https://arxiv.org/abs/2304.03271>
- Alexandra Sasha Luccioni, Yacine Jernite, and Emma Strubell, “Power Hungry Processing” (ACM FAccT 2024): <https://doi.org/10.1145/3630106.3658542>
- Julien Delavande, Régis Pierrard, and Sasha Luccioni, “Video Killed the Energy Budget” (2025): <https://arxiv.org/abs/2509.19222>
- World Bank/IEA, electric-power consumption per capita: <https://data.worldbank.org/indicator/EG.USE.ELEC.KH.PC>
- World Bank/FAO AQUASTAT, annual freshwater withdrawals: <https://data.worldbank.org/indicator/ER.H2O.FWTL.K3>
- World Bank, domestic/municipal withdrawal share and methodology: <https://databank.worldbank.org/metadataglossary/sustainable-development-goals-%28sdgs%29/series/ER.H2O.FWDM.ZS>
- World Bank, United States country data (2024 territorial CO₂ per capita): <https://data.worldbank.org/country/US>
- World Bank, Bangladesh country data (2024 territorial CO₂ per capita): <https://data.worldbank.org/country/bangladesh>

## Suggested attribution

> Conceived, directed, tested, and edited by Saber Khan; built primarily with OpenAI Codex/ChatGPT; early prototyping and independent review with Anthropic Claude.
