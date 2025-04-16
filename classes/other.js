import z from 'zod';

/**
 * Use to remove all radius modifications from an element
 *
 * .transform((a) => (a ? 'is-radiusless' : ''))
 */
export const NoRadius = z.boolean().default(false);

/**
 * Use to remove all shadows from an element
 *
 * .transform((a) => (a ? 'is-shadowless' : ''))
 */
export const NoShadow = z.boolean().default(false);

/**
 * Use to make content unselectable
 *
 * .transform((a) => (a ? 'is-unselectable' : ''))
 */
export const Unselectable = z.boolean().default(false);

/**
 * Use to force a pointer selector on an element
 *
 * .transform((a) => (a ? 'is-clickable' : ''))
 */
export const Clickable = z.boolean().default(false);

/**
 * Use to set element positioning to relative
 *
 * .transform((a) => (a ? 'is-relative' : ''))
 */
export const Relative = z.boolean().default(false);
