import z from 'zod';
import * as c from '../classes/index.js';

export const common = z.object({
  ...c.ClassDirectives.shape,
  ...c.Align.shape,
  ...c.Clickable.shape,
  ...c.Width.shape,
  ...c.Display.shape,
  ...c.Float.shape,
  ...c.Margin.shape,
  ...c.NoRadius.shape,
  ...c.NoShadow.shape,
  ...c.Padding.shape,
  ...c.Relative.shape
});

export const colorStandard = z.object({
  ...c.ColorText.shape,
  ...c.ColorBackground.shape
});

export const colorSpecial = z.object({
  ...c.Color.shape
});
