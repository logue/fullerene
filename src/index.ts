import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { RspressPlugin } from '@rspress/core';

/** Plugin name reported to Rspress. */
export const PLUGIN_NAME = 'fullerene';

/**
 * Absolute path of the prebuilt theme stylesheet (`dist/style.css`).
 *
 * The stylesheet is plain CSS, so consumers need neither Sass nor `@carbon/styles`.
 * Pages that are not built with Rspress can use it too, through the
 * `fullerene/style.css` export.
 */
export const stylesheetPath: string = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'style.css'
);

/**
 * Rspress plugin that applies Fullerene, Logue's theme, a design based on IBM Carbon.
 *
 * @example
 * ```ts
 * import { defineConfig } from '@rspress/core';
 * import { pluginFullerene } from 'fullerene';
 *
 * export default defineConfig({
 *   plugins: [pluginFullerene()]
 * });
 * ```
 */
export const pluginFullerene = (): RspressPlugin => ({
  name: PLUGIN_NAME,
  globalStyles: stylesheetPath
});
