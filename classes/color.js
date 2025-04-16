import z from 'zod';

/**
 * User to color things that aren't text or backgrounds
 *
 * Transform: `is-${a}`
 */
export const Color = z.enum([
  'black',
  'danger',
  'dark',
  'ghost',
  'grey',
  'info',
  'light',
  'link',
  'primary',
  'success',
  'text',
  'warning',
  'white'
]);
//.transform((c) => `is-${c}`);

/**
 * Use to control the color of the text
 *
 * Transform: `has-text-${a}`
 */
export const ColorText = z.enum([
  'black-bis',
  'black-ter',
  'black',
  'danger-dark',
  'danger-light',
  'danger',
  'dark',
  'grey-dark',
  'grey-darker',
  'grey-light',
  'grey-lighter',
  'grey',
  'info-dark',
  'info-light',
  'info',
  'light',
  'link-dark',
  'link-light',
  'link',
  'primary-dark',
  'primary-light',
  'primary',
  'success-dark',
  'success-light',
  'success',
  'warning-dark',
  'warning-light',
  'warning',
  'white-bis',
  'white-ter',
  'white'
]);
// .transform((c) => `has-text-${c}`);

/**
 * Use to control the background color
 *
 * Transform: `has-background-${a}`
 */
export const ColorBackground = z.enum([
  'black-bis',
  'black-ter',
  'black',
  'danger-dark',
  'danger-light',
  'danger',
  'dark',
  'grey-dark',
  'grey-darker',
  'grey-light',
  'grey-lighter',
  'grey',
  'info-dark',
  'info-light',
  'info',
  'light',
  'link-dark',
  'link-light',
  'link',
  'primary-dark',
  'primary-light',
  'primary',
  'success-dark',
  'success-light',
  'success',
  'warning-dark',
  'warning-light',
  'warning',
  'white-bis',
  'white-ter',
  'white'
]);
// .transform((c) => `has-background-${c}`);
