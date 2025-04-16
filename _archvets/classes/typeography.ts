import z from 'zod';

/** Use to control the font weight within an element */
export const MbFontWeight = z
  .enum(['light', 'normal', 'medium', 'semibold', 'bold'])
  .transform((a) => `has-text-weight-${a}`)
  .optional();

/** Use to apply transformations to text elements */
export const MbTextTransformation = z
  .enum(['uppercase', 'lowercase', 'capitalized', 'italic'])
  .transform((a) => `is-${a}`)
  .optional();

/** Use to control the size of text elements */
export const MbTextSizeRaw = z.number().min(1).max(7);

/** Use to control the size of text elements */
export const MbTextSize = MbTextSizeRaw.transform((a) => `is-size-${a}`).optional();

/** Use to control the font family */
export const MbFontFamily = z
  .enum(['sans-serif', 'monospace', 'primary', 'secondary', 'code'])
  .transform((a) => `is-family-${a}`)
  .optional();
