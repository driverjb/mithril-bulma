import z from 'zod';

/**
 * Use to control container width
 *
 * Transform: `is-${a}`
 */
export const Width = z.object({
  width: z.enum(['fullwidth', 'narrow']).optional()
});
