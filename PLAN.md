# PLAN.md

> Working specification hub for AI discussions and implementation.

## 1. 🧾 Meta

- Project: `fullerene` (npm, unscoped)
- Owner: Logue
- Updated: 2026-11-18
- Status: `Draft`

## 2. 💡 Draft Spec

- Background: annealer carries its Rspress theme in its own `theme/` directory. The same
  theme should be shared by other projects (umd-core and later libraries) without copying it.
- Goal: ship the theme as an Rspress plugin that points at a prebuilt CSS file.
- Positioning: a design by Logue, based on IBM Carbon. Not Carbon itself.
- Scope:
  - Carbon tokens (`--cds-*`) on `<html>`, `white` and `g100` (`html.rp-dark`)
  - IBM Plex fonts, Twemoji, Carbon type styles
  - `--cds-*` → `--rp-*` mapping
- Out of scope (deferred, see PROGRESS.md):
  - Replacing Rspress components (callouts in Carbon style)
  - Code blocks rendered with the vue-codemirror6 Web Components (`vue-codemirror6/wc`)
- Requirements:
  - [x] Consumers need neither Sass nor `@carbon/styles`
  - [x] Only the Carbon modules the theme uses are emitted
  - [x] Tokens readable from Shadow DOM (set as custom properties on `<html>`)

## 3. ✅ Decision

- Name: `fullerene` (unscoped on npm). A fullerene is made of carbon but has its own
  structure, like this theme and Carbon. It pairs with annealer's material-science naming.
- Keep Carbon's token names and prefix (`--cds-*`). A separate naming system would need a
  mapping table to maintain, and Carbon's own Web Components read the same tokens.
- Logue's own additions use `--logue-*`, so they never collide with future Carbon tokens.
- Pin the `@carbon/styles` major version. Carbon has renamed tokens across majors.
- Distribute prebuilt CSS, not SCSS, to keep consumer dependencies minimal.
- `$font-families` is configured on `@carbon/styles/scss/type`. It is not a variable of the
  Carbon config module.

## 4. 🛠️ Implementation Tasks

See PROGRESS.md.
