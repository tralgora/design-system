# design-system

Notes for any AI agent working on this repo.

## What this is

`@tralgora/design-system` — the published source of truth for Tralgora's visual language:
dark-only oklch color tokens, typography, logo, icons, and a UI-kit reference for
Indian-markets product surfaces. Consumed as an npm package (currently pinned at `v0.1.1`
in the website). See [README.md](README.md) and [SKILL.md](SKILL.md) for usage.

## What ships (package exports)

`colors_and_type.css` (main), `tokens/` (`tokens.css`, `design-tokens.json`,
`tailwind.config.js`), `fonts/`, `assets/`, `preview/`, `ui_kits/`, `docs/`. The `files`
allowlist in `package.json` controls what's published — update it when adding a new public
surface, or it won't ship.

## Conventions

- **This repo is the source of truth for tokens.** Consumers (website, future apps) import
  tokens from here — they must not fork values back inline. A token change is a
  design-system release, not a downstream edit.
- **Dark-only, oklch.** Don't introduce a light theme or non-oklch color values without an
  explicit decision.
- **Self-hosted fonts** live in `fonts/` and are referenced by consumers from
  `node_modules/@tralgora/design-system/fonts/` — don't duplicate them downstream or pull in
  Google Fonts CDN.
- **No laptop absolute paths or `[[memory pointers]]`** in committed files.

## Releasing

- Bump `version` in `package.json`, update `CHANGELOG.md`, then publish.
- **A consumer bump is a separate step** — e.g. the website pins an exact version; update its
  dependency and redeploy after publishing. Note the Turbopack `@import` quirks when the
  website consumes new token files.
