import z from 'zod';

/** Use to control container width */
export const MbContainerWidth = z
  .enum(['fullwidth', 'narrow'])
  .transform((a) => `is-${a}`)
  .optional();
