import * as c from '../classes/index.js';
import z from 'zod';

export interface MbCommonOptions {
  margin: z.infer<typeof c.MbMarginRaw>;
  padding: z.infer<typeof c.MbPaddingRaw>;
  flex: z.infer<typeof c.MbFlex>;
  visible: z.infer<typeof c.MbVisibility>;
  float: z.infer<typeof c.MbFloat>;
  display: z.infer<typeof c.MbDisplay>;
  clip: z.infer<typeof c.MbOverflowRaw>;
  responsive: z.infer<typeof c.MbResponsive>;
  align: z.infer<typeof c.MbAlignment>;
}

export interface MbColorOptions {
  colorText: z.infer<typeof c.MbColorTextRaw> & z.infer<typeof c.MbColorGreyTextRaw>;
  colorBackground: z.infer<typeof c.MbColorBackground> & z.infer<typeof c.MbColorGreyBackground>;
}

export const commonSchema = z.object({
  margin: c.MbMargin,
  padding: c.MbPadding,
  flex: c.MbFlex,
  visible: c.MbVisibility,
  float: c.MbFloat,
  display: c.MbDisplay,
  clip: c.MbOverflow,
  responsive: c.MbResponsive,
  align: c.MbAlignment
});

export const colorSchema = z.object({
  colorText: z.union([c.MbColorText, c.MbColorGreyText]),
  colorBackground: z.union([c.MbColorBackground, c.MbColorGreyBackground])
});

export function prepareCommonOptions(o: MbCommonOptions) {
  const test = commonSchema.safeParse(o);
  if (test.error) {
    console.warn(test.error);
    return [];
  }
  const { clip, align, display, flex, float, margin, padding, responsive, visible } = test.data;
  const margins = Object.values(margin ? margin : {}).filter(Boolean);
  const paddings = Object.values(padding ? padding : {}).filter(Boolean);
  return [clip, align, display, flex, float, ...margins, ...paddings, responsive, visible];
}

export function prepareColorOptions(o: MbColorOptions) {
  const test = colorSchema.safeParse(o);
  if (test.error) {
    console.warn(test.error);
    return [];
  } else {
    const { colorBackground, colorText } = test.data;
    return [colorBackground, colorText];
  }
}

export function prepareClasses(o: any[]) {
  return o.filter(Boolean).sort().join(' ');
}
