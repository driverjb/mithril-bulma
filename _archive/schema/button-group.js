import z from 'zod';

/** Set the size for a group of buttons */
export const size = z
  .enum(['small', 'normal', 'medium', 'large'])
  .default('normal')
  .transform((s) => (s === 'normal' ? '' : `are-${s}`));
