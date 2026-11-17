import '@/styles/index.scss';
import './index.scss';

/** Carbon tokens shown on the token sheet. */
const TOKENS: readonly string[] = [
  'background',
  'layer-01',
  'layer-02',
  'border-subtle-01',
  'border-strong-01',
  'text-primary',
  'text-secondary',
  'link-primary',
  'interactive',
  'support-success',
  'support-info',
  'support-warning',
  'support-error',
  'status-purple'
];

/** Message sent by the docs site (`DemoIframe`) to switch the theme. */
interface SetThemeMessage {
  type: 'set-theme';
  dark: boolean;
}

const isSetThemeMessage = (data: unknown): data is SetThemeMessage =>
  typeof data === 'object' &&
  data !== null &&
  (data as Partial<SetThemeMessage>).type === 'set-theme';

const list = document.querySelector<HTMLUListElement>('#tokens');

if (list) {
  for (const token of TOKENS) {
    const item = document.createElement('li');
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = `var(--cds-${token})`;
    const label = document.createElement('code');
    label.textContent = `--cds-${token}`;
    item.append(swatch, label);
    list.append(item);
  }
}

/** Report the content height so the docs page can size the iframe. */
const postHeight = (): void => {
  globalThis.parent.postMessage(
    { type: 'resize-iframe', height: String(document.documentElement.scrollHeight) },
    globalThis.location.origin
  );
};

globalThis.addEventListener('message', (event: MessageEvent<unknown>) => {
  if (event.origin !== globalThis.location.origin || !isSetThemeMessage(event.data)) {
    return;
  }
  document.documentElement.classList.toggle('rp-dark', event.data.dark);
});

new ResizeObserver(postHeight).observe(document.body);
