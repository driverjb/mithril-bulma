import z from 'zod';
import * as c from '../classes/index.js';

export const common = z.object({
  ...c.classDirectives.shape,
  ...c.align.shape,
  ...c.clickable.shape,
  ...c.width.shape,
  ...c.display.shape,
  ...c.float.shape,
  ...c.margin.shape,
  ...c.noRadius.shape,
  ...c.noShadow.shape,
  ...c.padding.shape,
  ...c.relative.shape
});

export const colorStandard = z.object({
  ...c.colorText.shape,
  ...c.colorBackground.shape
});

export const colorSpecial = z.object({
  ...c.color.shape
});

const {} = common.parse({});
