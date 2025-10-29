import m from 'mithril';
import { extractClasses, has, is, toClass } from '../util.mjs';

/**
 * @typedef {object} GridAttributes
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'} [minColumnSize]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [gap]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [rowGap]
 * @prop {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'} [colGap]
 */

/**
 * A smart 2D grid with flexible columns
 *
 * https://bulma.io/documentation/grid/smart-grid/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & GridAttributes>}
 */
export const Smart = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { minColumnSize, gap, rowGap, colGap, ...rest } = attrs;
    const classes = toClass(
      minColumnSize ? `is-col-min-${minColumnSize}` : null,
      gap ? `is-gap-${gap}` : null,
      rowGap ? `is-row-gap-${rowGap}` : null,
      colGap ? `is-column-gap-${colGap}` : null,
      extracted
    );
    return m('.grid', { class: classes, ...rest }, children);
  }
};
