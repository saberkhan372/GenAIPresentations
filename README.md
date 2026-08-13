# Generative AI Presentations

Interactive, facilitator-led presentations about generative AI. The published site is designed for projection and room discussion rather than self-paced course delivery.

## Presentations

### Meaning ↔ Prediction

A 15-slide workshop that moves between human meaning-making, a transparent corpus-counting activity, and a small A/B image-generation investigation.

- [Open the presentation](./meaning-prediction/)
- [Read the facilitator guide](./meaning-prediction/facilitator-guide.md)
- [Read the development notes](./meaning-prediction/development-notes.md)
- [Review source and service notices](./meaning-prediction/NOTICE.md)

## Site structure

```text
.
├── index.html                         # Public collection landing page
├── meaning-prediction/
│   ├── index.html                     # Interactive slide webpage
│   ├── corpus-data.js                 # Local Founding & Rights corpus
│   ├── facilitator-guide.md           # Teaching directions and contingencies
│   ├── development-notes.md           # Public design and implementation record
│   ├── verify.js                       # Deterministic source and corpus checks
│   ├── README.md                      # Presentation overview
│   └── NOTICE.md                      # Sources and external-service boundaries
└── .github/workflows/pages.yml        # Static GitHub Pages deployment
```

The presentation has no build step. It can be opened as a local file, and GitHub Pages serves the same static files. Network access is needed for the embedded Long Story Short activity, web fonts, and any image-generation tools used during the workshop.

From `meaning-prediction/`, run `node verify.js` for deterministic source, syntax, corpus, interaction-contract, and accessibility-hook checks. The verifier uses only Node.js built-ins and does not execute the browser lesson code.

## Privacy

The lesson code has no analytics, backend, account system, or browser storage. Its interactive state stays in memory and clears on reload. Embedded or linked external services have their own terms and data practices; the facilitator guide describes those boundaries.

## License

No open-source or content license is included at this time. Public availability does not by itself grant permission to reuse or redistribute the materials.
