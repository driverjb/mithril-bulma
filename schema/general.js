import z from 'zod';

/** Schema for consuming a list of classes and converting them into a class list for an element */
export const classSchema = z
  .array(z.string())
  .default([])
  .transform((a) => a.join(' '));
export const responsive = z
  .boolean()
  .default(false)
  .transform((r) => (r ? 'is-responsive' : ''));
export const size = z
  .enum(['small', 'normal', 'medium', 'large'])
  .default('normal')
  .transform((s) => (s === 'normal' ? '' : `is-${s}`));
export const fullWidth = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-fullwidth' : ''));
export const rounded = z
  .boolean()
  .default(false)
  .transform((r) => (r ? 'is-rounded' : ''));
/** force the "hovered" style of the element without it being hovered */
export const hovered = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-hovered' : ''));
/** force the "focused" style of the element without it being focused */
export const focused = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-focused' : ''));
/** force the "active" style of the element without it being active */
export const active = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-active' : ''));
/** display a loading spinner */
export const loading = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-loading' : ''));
export const isStatic = z
  .boolean()
  .default(false)
  .transform((f) => (f ? 'is-static' : ''));
export const disabled = z
  .union([z.boolean(), z.function()])
  .default(false)
  .transform((f) => {
    if (typeof f == 'boolean') return () => f;
    else return f;
  });
export const color = z
  .enum([
    'white',
    'light',
    'dark',
    'black',
    'text',
    'ghost',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'none'
  ])
  .default('none');

export const alignment = z
  .enum(['left', 'center', 'right'])
  .default('left')
  .transform((a) => {
    switch (a) {
      case 'center':
        return 'is-centered';
      case 'left':
        return '';
      case 'right':
        return 'is-right';
      default:
        return '';
    }
  });
