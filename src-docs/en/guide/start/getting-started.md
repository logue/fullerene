---
description: Install Fullerene and apply it with pluginFullerene, or use the stylesheet directly.
---

# Getting started

## Install

```bash
pnpm add -D fullerene
```

`@rspress/core` 2.x is a peer dependency.

## Apply the theme

Add the plugin to your Rspress configuration:

```ts title="rspress.config.ts"
import { defineConfig } from '@rspress/core';
import { pluginFullerene } from 'fullerene';

export default defineConfig({
  plugins: [pluginFullerene()]
});
```

With the Rstack CLI, add it to `define.doc()` in `rstack.config.ts` in the same way.

The plugin registers the prebuilt `dist/style.css` as a global style. You do not need a `theme/` directory, Sass, or `@carbon/styles`.

## Use the stylesheet without Rspress

The stylesheet is also exported on its own:

```ts
import 'fullerene/style.css';
```

The color tokens switch with the `rp-dark` class on the `html` element. Add or remove that class to switch between the light and dark themes.

:::tip

The pages under **Markdown & MDX** in this site show containers, code blocks, and other Rspress elements with the theme applied.

:::
