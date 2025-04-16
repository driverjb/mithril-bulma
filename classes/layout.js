import z from 'zod';

/**
 * Use for adding a display directive to the class list
 *
 * .transform((a) => `is-${a}`)
 */
export const Display = z.enum(['block', 'inline', 'inline-block', 'flex', 'inline-flex']);

/**
 * Use for adding a visibility directive to the class list
 *
 * .transform((a) => `is-${a}`)
 */
export const Visibility = z.enum(['hidden', 'invisible']);

/**
 * Use for adding a float directive to the class list
 * .transform((a) => `is-pulled-${a}`)
 */
export const Float = z.enum(['left', 'right']);

/**
 * Use for adding overflow: hidden to the class list
 *
 * .transform((a) => (a ? 'is-clipped' : ''))
 */
export const Overflow = z.boolean().default(false);

/**
 * Use for controlling responsiveness of the element
 *
 * .transform((a) => `is-${a}`)
 */
export const Responsive = z.enum(['mobile', 'desktop', 'widescreen', 'fullhd']);

/**
 * Use for controlling the alignment of the text in the element
 *
 * .transform((a) => `has-text-${a}`)
 */
export const Alignment = z.enum(['left', 'center', 'right', 'justify']);
