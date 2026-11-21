# @c60/rspress

[![TypeScript](https://img.shields.io/badge/TypeScript-7-%230074c1.svg)](http://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-12-pink.svg)](https://pnpm.io/)
[![Rstack](https://img.shields.io/badge/rstack-0.9-orange.svg)](https://rstack.rs/)

Fullerene is Logue's theme for [Rspress](https://rspress.rs/): a design based on [IBM Carbon](https://carbondesignsystem.com/).
This is not an official Carbon theme.

The name comes from buckminsterfullerene (C60): a molecule made of carbon, with a structure of its own. It is named after Buckminster Fuller, the designer of the geodesic dome.

## Usage

```bash
pnpm add -D @c60/rspress
```

```ts
import { defineConfig } from '@rspress/core';
import { pluginFullerene } from '@c60/rspress';

export default defineConfig({
  plugins: [pluginFullerene()]
});
```

The plugin registers a prebuilt, plain CSS stylesheet. Consumers need neither Sass nor
`@carbon/styles`. The stylesheet is also available as `@c60/rspress/style.css`.

## What the theme contains

- IBM Plex fonts (Sans, Mono, Sans JP, Sans SC) and Twemoji
- Carbon type styles and type utility classes
- `--cds-*` tokens of Carbon's `white` theme, and `g100` under `html.rp-dark`
- `--cds-*` → Rspress `--rp-*` variable mapping (colors, containers, code blocks, Shiki)

Only these Carbon modules are loaded; Carbon's component CSS, grid and reset are not.
Fullerene's own additions use the `--fullerene-*` prefix.

## Development

```bash
pnpm install
pnpm run build       # dist/index.es.js, dist/index.d.ts, dist/style.css
pnpm run test
pnpm run dev:docs    # docs site, using the theme from src/styles
pnpm run build:docs  # demo + docs site into docs/
pnpm run lint
```

Source layout:

- `src/index.ts` — the Rspress plugin
- `src/styles/_carbon.scss` — Carbon configuration, fonts, type styles, tokens
- `src/styles/_rspress.scss` — token mapping to Rspress variables, Rspress fixes
- `src-demo/` — token and typography sheet shown on the Playground page
- `src-docs/` — documentation site (also a visual test bed for the theme)

## License

©2026 by Logue.
Licensed under the [MIT License](LICENSE).
