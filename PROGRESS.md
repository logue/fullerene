# PROGRESS.md

## Phase 1: Extract the theme from annealer

- [x] Project created from `rstack-library-starter`
- [x] annealer's `theme/index.scss` split into `src/styles/_carbon.scss` and `src/styles/_rspress.scss`
- [x] Load only Carbon config, fonts, type and theme modules
  - annealer loads the `@carbon/styles` entry, which also emits all component CSS:
    about 1.26 MB of CSS. The theme alone is about 100 KB.
- [x] Register the Carbon component token sets the mapping uses (button, notification,
      tag, status). They are not part of the base theme; with only the theme modules
      loaded, 9 referenced tokens were undefined.
- [x] Mapping selector raised from `:root` to `html:root`
  - Rspress's Callout styles set the `--rp-container-*` variables on `:root` and `.dark`
    and load after global styles, so a plain `:root` lost. annealer is affected too:
    its containers show Rspress's default colors, not Carbon's.
- [x] `--font-sans` / `--font-mono` renamed to `--logue-font-sans` / `--logue-font-mono`
- [x] Rspress plugin `pluginFullerene()` with prebuilt `dist/style.css`
- [x] `@buckminsterfullerene/rspress/style.css` export
- [x] UMD build removed (the package is a Node-side Rspress plugin plus a CSS file)
- [x] Docs site uses the theme from source; Playground shows typography and tokens
- [ ] Decide the package and repository name, then set `"private": false`
- [ ] Replace annealer's `theme/` with the plugin

## Deferred

- [ ] Carbon-style callouts (needs Rspress component overrides, not only CSS)
- [ ] Code blocks with the vue-codemirror6 Web Components (`vue-codemirror6/wc`, `wc-auto`)
  - Rspress renders code blocks to static HTML at build time; Web Components render at
    view time. Keep the code text in the light DOM as a fallback.
  - The Web Components are built with Vue's `defineCustomElement`, so the Vue runtime
    would load on a React (Rspress) page. Check the size before adopting.
