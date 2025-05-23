import z from 'zod';

/**
 * Use to remove all radius modifications from an element
 *
 * .transform((a) => (a ? 'is-radiusless' : ''))
 */
export const noRadius = z.object({ noRadius: z.boolean().default(false) });

/**
 * Use to remove all shadows from an element
 *
 * .transform((a) => (a ? 'is-shadowless' : ''))
 */
export const noShadow = z.object({ noShadow: z.boolean().default(false) });

/**
 * Use to make content unselectable
 *
 * .transform((a) => (a ? 'is-unselectable' : ''))
 */
export const unselectable = z.object({ unselectable: z.boolean().default(false) });

/**
 * Use to force a pointer selector on an element
 *
 * .transform((a) => (a ? 'is-clickable' : ''))
 */
export const clickable = z.object({ clickable: z.boolean().default(false) });

/**
 * Use to set element positioning to relative
 *
 * .transform((a) => (a ? 'is-relative' : ''))
 */
export const relative = z.object({ relative: z.boolean().default(false) });

export const classDirectives = z.object({
  classDirectives: z.union([z.string(), z.array(z.string())]).optional()
});
