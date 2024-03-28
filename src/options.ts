import { Options as RevealOptions } from 'reveal.js';
import { DeepPartial } from './util/utility-types.ts';

export type Options = {
  bg: string;
  textFill: string;
  pathStroke: string;
  rectFill: string;
  rectStroke: string;
};

export const defaultOptions: Options = {
  bg: 'unset',
  pathStroke: '#82e4ff',
  rectFill: '#00a6ff',
  rectStroke: 'white',
  textFill: 'white',
};

export type AugmentedRevealOptions = RevealOptions & { railroad?: DeepPartial<Options> };
