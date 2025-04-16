import z from 'zod';

const colors = [
  'white',
  'black',
  'light',
  'dark',
  'primary',
  'primary-light',
  'primary-dark',
  'link',
  'link-light',
  'link-dark',
  'info',
  'info-light',
  'info-dark',
  'success',
  'success-light',
  'success-dark',
  'warning',
  'warning-light',
  'warning-dark',
  'danger',
  'danger-light',
  'danger-dark'
] as const;

const greyScale = [
  'black-bis',
  'black-ter',
  'grey-darker',
  'grey-dark',
  'grey',
  'grey-light',
  'grey-lighter',
  'white-ter',
  'white-bis'
] as const;

/** Use to control the color of the text */
export const MbColorTextRaw = z.enum(colors);

/** Use to control the color of the text */
export const MbColorText = MbColorTextRaw.transform((c) => `has-text-${c}`).optional();

/** Use to control the color of the text (greyscale) */
export const MbColorGreyTextRaw = z.enum(greyScale);

/** Use to control the color of the text (greyscale) */
export const MbColorGreyText = MbColorGreyTextRaw.transform((a) => `has-text-${a}`).optional();

/** Use to control the background color */
export const MbColorBackground = z
  .enum(colors)
  .transform((c) => `has-background-${c}`)
  .optional();

/** Use to control the color of the background (greyscale) */
export const MbColorGreyBackground = z
  .enum(greyScale)
  .transform((a) => `has-background-${a}`)
  .optional();
