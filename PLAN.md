# PLAN.md

> Working specification hub for AI discussions and implementation.

## 1. 🧾 Meta

- Project: `@c60/rspress` (repository: `logue/fullerene`)
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

- Name: npm scope `@c60`, this package `@c60/rspress`.
  Buckminsterfullerene (C60) is one specific structure made of carbon, like this design and
  Carbon; it is named after Buckminster Fuller, a designer. `@fullerene` is taken on npm
  (another author's UI library, 2022). The brand name in prose stays "Fullerene".
- Planned packages in the scope: `rspress` (this one), `codemirror` (CodeMirror theme),
  a theme for Universal Markdown output (not named `umd`, which reads as Universal Module
  Definition on npm), `tauri` (native integration: window chrome, OS dark mode). Extract a
  shared core (the `_carbon.scss` layer) when the second package is made.
- Scoped packages are restricted by default on npm; `publishConfig.access` is `public`.
- Keep Carbon's token names and prefix (`--cds-*`). A separate naming system would need a
  mapping table to maintain, and Carbon's own Web Components read the same tokens.
- Fullerene's own additions use `--fullerene-*`, so they never collide with future Carbon tokens.
- Pin the `@carbon/styles` major version. Carbon has renamed tokens across majors.
- Distribute prebuilt CSS, not SCSS, to keep consumer dependencies minimal.
- `$font-families` is configured on `@carbon/styles/scss/type`. It is not a variable of the
  Carbon config module.

## 4. 🛠️ Implementation Tasks

See PROGRESS.md.
