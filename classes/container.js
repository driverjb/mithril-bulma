import z from 'zod';

/**
 * Use to control container width
 *
 * Transform: `is-${a}`
 */
export const ContainerWidth = z.enum(['fullwidth', 'narrow']);
