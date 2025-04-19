import z from 'zod';

/**
 * Use for adding a display directive to the class list
 *
 * .transform((a) => `is-${a}`)
 */
export const display = z.object({
  display: z.enum(['block', 'inline', 'inline-block', 'flex', 'inline-flex']).optional()
});

/**
 * Use for adding a visibility directive to the class list
 *
 * .transform((a) => `is-${a}`)
 */
export const visibility = z.object({ visibility: z.enum(['hidden', 'invisible']).optional() });

/**
 * Use for adding a float directive to the class list
 * .transform((a) => `is-pulled-${a}`)
 */
export const float = z.object({ float: z.enum(['left', 'right']).optional() });

/**
 * Use for adding overflow: hidden to the class list
 *
 * .transform((a) => (a ? 'is-clipped' : ''))
 */
export const overflow = z.object({ overflow: z.boolean().default(false).optional() });

/**
 * Use for controlling responsiveness of the element
 *
 * .transform((a) => `is-${a}`)
 */
export const responsive = z.object({
  responsive: z.enum(['mobile', 'desktop', 'widescreen', 'fullhd']).optional()
});

/**
 * Use for controlling the alignment of the text in the element
 *
 * .transform((a) => `has-text-${a}`)
 */
export const align = z.object({ align: z.enum(['left', 'center', 'right', 'justify']).optional() });
