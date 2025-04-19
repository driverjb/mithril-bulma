import z from 'zod';

export const size = z.object({ size: z.enum(['small', 'medium', 'normal', 'large']).optional() });
export const sizeGroup = z.object({
  sizeGroup: z.enum(['small', 'medium', 'normal', 'large']).optional()
});
