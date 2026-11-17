---
description: What the Logue Rspress theme is, what it contains, and how its CSS is organized.
---

# Introduction

Fullerene is Logue's theme for [Rspress](https://rspress.rs/), a design based on [IBM Carbon](https://carbondesignsystem.com/). It is not an official Carbon theme.

## What the theme contains

- IBM Plex fonts (Sans, Mono, Sans JP, Sans SC) and Twemoji for emoji.
- Carbon type styles and type utility classes such as `cds--type-body-01`.
- The `--cds-*` tokens of Carbon's `white` theme, and of the `g100` theme when Rspress is in dark mode (`html.rp-dark`).
- A mapping from these tokens to the Rspress CSS variables (`--rp-*`): colors, containers such as `:::tip`, code blocks, and Shiki syntax colors.

The theme loads only these parts of Carbon. It does not include Carbon's component CSS, grid, or reset.

## Token naming

- Tokens that come from Carbon keep Carbon's names (`--cds-*`). Carbon's own components, such as `@carbon/web-components`, read the same tokens.
- Tokens that Logue adds use the `--logue-*` prefix, so they never collide with tokens a later Carbon release may add.

Carbon has renamed tokens between major versions before. The `@carbon/styles` major version is pinned, and a major upgrade needs a check of the token names.

## Web Components

The tokens are set on the `html` element as custom properties. Custom properties inherit into Shadow DOM, so a Web Component on the page can read `var(--cds-text-primary)` and follow the light and dark themes without extra code.
