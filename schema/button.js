import z from 'zod';
import * as general from './general.js';

/** The type of button this will be */
export const type = z.enum(['button', 'submit', 'reset']).default('button');
/** The color the button should be */
export const color = general.color.transform((c) => (c === 'none' ? '' : `is-${c}`));
/** Does the user want the light, dark, or standard color style */
export const colorStyle = z
  .enum(['light', 'normal', 'dark'])
  .default('normal')
  .transform((s) => (s === 'normal' ? '' : `is-${s}`));
/** Draw the button as an outline only */
export const outlined = z
  .boolean()
  .default(false)
  .transform((o) => (o ? 'is-outlined' : ''));
export const inverted = z
  .boolean()
  .default(false)
  .transform((o) => (o ? 'is-inverted' : ''));
