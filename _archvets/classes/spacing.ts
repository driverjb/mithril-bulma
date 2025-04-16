import z from 'zod';

const numberPrefixer = (pfx) =>
  z
    .number()
    .min(0)
    .max(6)
    .transform((a) => `${pfx}-${a}`)
    .optional();

/** Use to finely control element margin */
export const MbMargin = z
  .object({
    all: numberPrefixer('m'),
    top: numberPrefixer('mt'),
    bottom: numberPrefixer('mb'),
    left: numberPrefixer('ml'),
    right: numberPrefixer('mr'),
    x: numberPrefixer('mx'),
    y: numberPrefixer('my')
  })
  .optional();

/** Use to finely control element padding */
export const MbPadding = z
  .object({
    all: numberPrefixer('p'),
    top: numberPrefixer('pt'),
    bottom: numberPrefixer('pb'),
    left: numberPrefixer('pl'),
    right: numberPrefixer('pr'),
    x: numberPrefixer('px'),
    y: numberPrefixer('py')
  })
  .optional();
