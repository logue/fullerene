// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
// The docs site uses the theme from source (`src/styles/`), so edits show up without a
// library build. Published consumers use `pluginFullerene()`, which points at the prebuilt
// `dist/style.css`. Anything added here applies only to the docs site, not to the plugin.
// rslint-disable-next-line import/no-relative-parent-imports -- theme/ sits outside src/.
import '../src/styles/index.scss';

export * from '@rspress/core/theme-original';
