# Changelog

All notable changes to the Tralgora Design System are documented here. This project follows [Semantic Versioning](https://semver.org/).

## [0.1.0] — 2026-05-23

First public cut. Expect breaking changes through `0.x`.

### Added
- **Tokens** — full color (surfaces, lines, text, signals, data-viz), spacing (4px base, 22 steps), radii, type (size scale, weight, line-height, tracking), motion, layout containers, and elevation. Canonical source: `tokens/tokens.css`.
- **W3C export** — `tokens/design-tokens.json` covers color, font (family / size / weight / lineHeight / tracking), spacing, radius, shadow, motion, layout.
- **Tailwind theme excerpt** — `tokens/tailwind.config.js`.
- **Type system** — Geist (sans, variable), Geist Mono (variable), Instrument Serif (italic 400 only). Semantic classes: `.t-display`, `.t-h1–4`, `.t-lead`, `.t-body`, `.t-eyebrow`, `.t-label`, `.t-mono`, `.t-num`, `.t-accent-italic`.
- **Brand assets** — logomark, wordmark, lockup, `Tralgora · Radar` lockup, favicon, OG card, social avatar — all SVG.
- **Icon sprite** — `assets/icons/icons.svg`, 24px house-style set.
- **Social templates** — Twitter avatar + header, post-card templates (regime, theme, principle, waitlist).
- **UI kit** — `ui_kits/radar-product/` Morning Radar dashboard reference.
- **Docs** — `docs/voice-and-tone.md` (banned language, italic-word rule) and `docs/compliance.md` (public vs operator mode).
- **Skill** — `SKILL.md` front-matter so the repo loads as a Claude Skill.
- **Print tokens** — color overrides scoped to `@media print` for research notes / post-market PDFs.

### Known gaps (tracked as TODOs in README)
- No standalone `components/` folder yet — consumers scrape the UI kit.
- No icon index page (`preview/icons.html`).
- No light-mode tokens.
- No Indic-script font pairing.
- Marketing-site UI kit is not in this repo by design; consume the production site for public-mode references.

[0.1.0]: https://github.com/tralgora/design-system/releases/tag/v0.1.0
