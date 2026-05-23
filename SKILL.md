---
name: Tralgora Design System
description: Dark-only premium market-intelligence design system for Tralgora — Indian-markets product with public Radar mode and operator-mode (Lab / Cockpit) surfaces.
---

# Tralgora Design System

Use this skill when designing any Tralgora surface — marketing pages, the Radar product UI, slide decks, social posts, or future Lab/Cockpit screens.

## How to apply this system

1. **Read `colors_and_type.css` first.** Every token lives there. Always link it from new HTML.
2. **Check `docs/voice-and-tone.md` and `docs/compliance.md`.** Public-mode copy bans specific buy/sell language and requires the SEBI disclaimer.
3. **Use the lockup convention.** `Tralgora · Radar` (middot). Sub-products: `Tralgora · Lab`, `Tralgora · Cockpit`.
4. **One Instrument Serif italic word per page.** Highlights the pivot in a headline. Never on body.
5. **Mono for data.** Geist Mono with `font-variant-numeric: tabular-nums` for any number, ID, percentage, or label.
6. **Color is meaning.** Green = strength/active. Blue = macro/neutral. Red = risk. Amber = caution. Don't use them decoratively.
7. **Borders not shadows.** Cards and panels use `1px solid var(--line)`. Shadow only for floating UI (toasts, popovers).
8. **Sharp corners.** Default radius is 2px. 4px for big panels. Pill only for chips.

## Core files

- `colors_and_type.css` — all tokens
- `assets/logo/` — mark, wordmark, lockup, favicon, OG, avatar
- `assets/icons/icons.svg` — sprite (use via `<use href="icons.svg#regime"/>`)
- `tokens/` — Tailwind, plain CSS, W3C JSON
- `ui_kits/radar-product/` — full product-UI reference
- **Website kit** — not in this repo. Marketing site lives in `tralgora/website` (production codebase). For public-mode surfaces, mirror the live site, don't re-mock it here.

## Voice cheatsheet

> "Strength is broadening into Defence and Capital Goods."
> "FII selling absorbed by DII; macro is neutral."
> "Different styles. Same underlying _structure_."

Never: "Buy XYZ at ₹420 · target 480 · SL 405."
