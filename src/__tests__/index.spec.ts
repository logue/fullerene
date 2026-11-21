import { describe, expect, it } from 'rstack/test';

import { readFileSync } from 'node:fs';
import path from 'node:path';

import { PLUGIN_NAME, pluginFullerene, stylesheetPath } from '@/index';

describe('pluginFullerene', () => {
  it('returns an Rspress plugin with the theme name', () => {
    expect(pluginFullerene().name).toBe(PLUGIN_NAME);
  });

  it('reports the same name as package.json', () => {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8')) as { name: string };
    expect(PLUGIN_NAME).toBe(packageJson.name);
  });

  it('registers the prebuilt stylesheet as a global style', () => {
    expect(pluginFullerene().globalStyles).toBe(stylesheetPath);
  });

  it('resolves the stylesheet next to the module as an absolute path', () => {
    expect(path.isAbsolute(stylesheetPath)).toBe(true);
    expect(path.basename(stylesheetPath)).toBe('style.css');
  });
});
