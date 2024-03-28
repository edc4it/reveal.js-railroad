import 'railroad-diagrams/railroad.css';
import '../styling/main.css';
import { Options } from '../options.ts';

export function applyStyle(revealElement: HTMLElement, options: Required<Options>) {
  revealElement.style.setProperty('--rr-bg', options.bg);
  revealElement.style.setProperty('--rr-textFill', options.textFill);
  revealElement.style.setProperty('--rr-pathStroke', options.pathStroke);
  revealElement.style.setProperty('--rr-rectFill', options.rectFill);
  revealElement.style.setProperty('--rr-rectStroke', options.rectStroke);
}
