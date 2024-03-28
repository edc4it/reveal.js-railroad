import { Options } from '../options.ts';
import { applyStyle } from './styles.ts';

export async function run(revealElement: HTMLElement, options: Options) {
  applyStyle(revealElement, options);
  // @ts-expect-error "railroad-diagrams/railroad" has no declarations
  const rr = await import('railroad-diagrams/railroad');
  Object.assign(window, rr.default);

  document.querySelectorAll("script[type='application/railroad']").forEach((s) => {
    try {
      const r = eval(s.innerHTML);
      const div = document.createElement('div');
      div.classList.add('railroad-diagram');
      r.addTo(div);
      s.replaceWith(div);
    } catch (e) {
      console.error('error with railroad diagrams: ', e);
    }
  });
}
