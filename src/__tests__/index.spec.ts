import { describe, expect, it } from 'rstack/test';

import path from 'node:path';

import { PLUGIN_NAME, pluginFullerene, stylesheetPath } from '@/index';

describe('pluginFullerene', () => {
  it('returns an Rspress plugin with the theme name', () => {
    expect(pluginFullerene().name).toBe(PLUGIN_NAME);
  });

  it('registers the prebuilt stylesheet as a global style', () => {
    expect(pluginFullerene().globalStyles).toBe(stylesheetPath);
  });

  it('resolves the stylesheet next to the module as an absolute path', () => {
    expect(path.isAbsolute(stylesheetPath)).toBe(true);
    expect(path.basename(stylesheetPath)).toBe('style.css');
  });
});
