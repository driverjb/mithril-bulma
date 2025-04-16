import * as c from '../classes/index.js';
import z from 'zod';

export const commonSchema = z.object({
  margin: c.MbMargin,
  padding: c.MbPadding,
  flex: c.MbFlex,
  visible: c.MbVisibility,
  float: c.MbFloat,
  display: c.MbDisplay,
  clip: c.MbOverflow,
  responsive: c.MbResponsive,
  align: c.MbAlignment,
  classManual: z
    .array(z.string())
    .default([])
    .transform((a) => a.join(' '))
});

export const colorSchema = z.object({
  colorText: c.MbColorText,
  colorBackground: c.MbColorBackground
});

export function prepareCommonOptions(o) {
  const test = commonSchema.safeParse(o);
  if (test.error) {
    console.warn(test.error);
    return [];
  }
  const { clip, align, display, flex, float, margin, padding, responsive, visible, classManual } =
    test.data;
  const margins = Object.values(margin ? margin : {}).filter(Boolean);
  const paddings = Object.values(padding ? padding : {}).filter(Boolean);
  return [
    clip,
    align,
    display,
    flex,
    float,
    ...margins,
    ...paddings,
    responsive,
    visible,
    classManual
  ].sort();
}

export function prepareColorOptions(o) {
  const test = colorSchema.safeParse(o);
  if (test.error) {
    console.warn(test.error);
    return [];
  } else {
    const { colorBackground, colorText } = test.data;
    return [colorBackground, colorText].sort();
  }
}

/**
 *
 * @param {any[]} o
 * @returns {string}
 */
export function prepareClasses(o) {
  return o.filter(Boolean).sort().join(' ');
}
