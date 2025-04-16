import z from 'zod';

/** Use for adding a display directive to the class list */
export const MbDisplay = z
  .enum(['block', 'inline', 'inline-block', 'flex', 'inline-flex'])
  .transform((a) => `is-${a}`)
  .optional();

/** Use for adding a visibility directive to the class list */
export const MbVisibility = z
  .enum(['hidden', 'invisible'])
  .transform((a) => `is-${a}`)
  .optional();

/** Use for adding a float directive to the class list */
export const MbFloat = z
  .enum(['left', 'right'])
  .transform((a) => `is-pulled-${a}`)
  .optional();

/** Use for adding overflow: hidden to the class list */
export const MbOverflowRaw = z.boolean().default(false);

/** Use for adding overflow: hidden to the class list */
export const MbOverflow = MbOverflowRaw.transform((a) => (a ? 'is-clipped' : ''));

/** Use for controlling responsiveness of the element */
export const MbResponsive = z
  .enum(['mobile', 'desktop', 'widescreen', 'fullhd'])
  .transform((a) => `is-${a}`)
  .optional();

/** Use for controlling the alignment of the text in the element */
export const MbAlignment = z
  .enum(['left', 'center', 'right', 'justify'])
  .transform((a) => `has-text-${a}`)
  .optional();
