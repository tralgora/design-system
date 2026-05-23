# Tralgora Design System

> **Market intelligence today. Systematic execution tomorrow.**
> _Different styles. Same underlying market structure._

Single source of visual truth for **Tralgora** — a market intelligence radar for Indian traders and investors. Covers the brand, the Radar product UI, slide decks, social posts, and (eventually) the operator-mode algo/backtest cockpit.

**Dark-only in v1.** Premium terminal-meets-research-dashboard. oklch color, monospace numerals, hairline borders, no decorative motion.

[![version](https://img.shields.io/badge/version-0.1.0-1f8b58?style=flat-square)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Proprietary-2c333d?style=flat-square)](./LICENSE)

---

## Install

**As an npm dep (recommended):**

```bash
npm i github:tralgora/design-system#v0.1.0
```

```css
/* Tokens only — the 95% case */
@import url("@tralgora/design-system/tokens/tokens.css");

/* Or tokens + fonts + semantic type classes */
@import url("@tralgora/design-system/colors_and_type.css");
```

**As a git submodule:**

```bash
git submodule add https://github.com/tralgora/design-system.git design-system
```

**For agents (Claude Skills):** point to this repo; `SKILL.md` is the entry point.

---

## What's in here

| Path | What it is |
|---|---|
| `colors_and_type.css` | Fonts + semantic type classes. Imports `tokens/tokens.css`. |
| `tokens/tokens.css` | **Canonical token source.** Pure custom properties. |
| `tokens/design-tokens.json` | W3C design-tokens export (full coverage). |
| `tokens/tailwind.config.js` | Tailwind theme excerpt — merge into your config. |
| `assets/logo/` | Logomark, wordmark, lockup, favicon, OG, social avatar — all SVG. |
| `assets/icons/icons.svg` | 24px icon sprite. Use via `<use href="icons.svg#name"/>`. |
| `assets/social/` | Social post templates (Twitter avatar, header, post cards). |
| `fonts/` | Self-hosted Geist + Geist Mono + Instrument Serif Italic. |
| `preview/` | Per-card HTML previews (color, type, spacing, components, brand, social). |
| `ui_kits/radar-product/` | UI kit: in-product Morning Radar dashboard (operator-leaning). |
| `docs/voice-and-tone.md` | Voice, banned language, SEBI disclaimer. |
| `docs/compliance.md` | Public mode vs operator mode rules. |
| `SKILL.md` | Claude Skill front-matter. Load the whole repo as an agent skill. |

## Brand snapshot

- **Master brand:** Tralgora
- **Product naming:** `Tralgora · Radar` (middot lockup). Future: `Tralgora · Lab`, `Tralgora · Cockpit`.
- **Algo platform codename:** _Tralgora · Lab_ (placeholder).
- **Brand line:** Market intelligence today. Systematic execution tomorrow.
- **Brand principle:** Different styles. Same underlying market structure.
- **Is:** A daily market structure layer.
- **Is not:** A tip service. A signal channel. A swing-only product. A multibagger page.

## Two product modes (one brand)

Every component has to work in both:

1. **Public mode** — marketing site, Morning Radar emails, social posts. Educational. SEBI disclaimer always visible. No specific buy/sell language. No targets, no SLs.
2. **Operator mode** — logged-in dashboards, future Lab/backtest UI, paper-trade and live-execution surfaces. Denser, more terminal-like. Full execution UI is permitted here.

See `docs/compliance.md`.

---

## Consumers

- **Marketing site** — lives in its own repo (`tralgora/website`, already in production). Imports tokens from this package. The site is the canonical implementation of the public-mode visual layer; don't fork a copy here.
- **Radar product UI** — `ui_kits/radar-product/index.html` is the design reference; product code should match it.
- **Slide decks & social** — designers should `@import` the CSS and pull SVGs from `assets/`.

---

## Releases

Tagged with semver. See [`CHANGELOG.md`](./CHANGELOG.md). Pin to a tag in production:

```json
"@tralgora/design-system": "github:tralgora/design-system#v0.1.0"
```

---

## TODO

- [ ] `components/` — carve out a real components folder with standalone snippets (button, input, chip, KPI card, table, segmented control). Right now consumers have to scrape `ui_kits/radar-product/index.html`.
- [ ] `preview/icons.html` — render the icon sprite contents with names so consumers can browse.
- [ ] Light-mode tokens (currently dark-only v1 + a small print override).
- [ ] Hindi / Indic script support — pair Geist with Noto Sans Devanagari when copy goes multilingual.
- [ ] Custom logo commission — current mark is the permanent direction; if a custom logo lands later, swap SVGs in `assets/logo/` and tokens travel.

---

## Sources & internal

- `_internal/uploads/` — original founder brief (`.docx`, `.pdf`, plaintext). **Not published** (in `.gitignore`).
- `_internal/explorations/` — logo rounds 2/3/4 and the design canvas. Kept for history; not published.

---

## How to use this with an agent

This project is also a Claude Skill. Load via `SKILL.md` and ask the agent to design any Tralgora surface — it pulls the right tokens, components, and tone rules from this folder.
