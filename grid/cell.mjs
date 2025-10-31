import m from 'mithril';
import { extractClasses, toClass } from '../util.mjs';

/**
 * @typedef {'1'|'1-mobile'|'1-tablet'|'1-desktop'|'1-widescreen'|'1-fullhd'|'2'|'2-mobile'|'2-tablet'|'2-desktop'|'2-widescreen'|'2-fullhd'|'3'|'3-mobile'|'3-tablet'|'3-desktop'|'3-widescreen'|'3-fullhd'|'4'|'4-mobile'|'4-tablet'|'4-desktop'|'4-widescreen'|'4-fullhd'|'5'|'5-mobile'|'5-tablet'|'5-desktop'|'5-widescreen'|'5-fullhd'|'6'|'6-mobile'|'6-tablet'|'6-desktop'|'6-widescreen'|'6-fullhd'|'7'|'7-mobile'|'7-tablet'|'7-desktop'|'7-widescreen'|'7-fullhd'|'8'|'8-mobile'|'8-tablet'|'8-desktop'|'8-widescreen'|'8-fullhd'|'9'|'9-mobile'|'9-tablet'|'9-desktop'|'9-widescreen'|'9-fullhd'|'10'|'10-mobile'|'10-tablet'|'10-desktop'|'10-widescreen'|'10-fullhd'|'11'|'11-mobile'|'11-tablet'|'11-desktop'|'11-widescreen'|'11-fullhd'|'12'|'12-mobile'|'12-tablet'|'12-desktop'|'12-widescreen'|'12-fullhd'} CellControl
 */

/**
 * @typedef {object} CellAttributes
 * @prop {CellControl[]|CellControl} [colStart]
 * @prop {CellControl[]|CellControl} [colFromEnd]
 * @prop {CellControl[]|CellControl} [colSpan]
 * @prop {CellControl[]|CellControl} [rowStart]
 * @prop {CellControl[]|CellControl} [rowFromEnd]
 * @prop {CellControl[]|CellControl} [rowSpan]
 */

/**
 *
 * @param {CellControl|CellControl[]} data
 * @param {string} prefix
 */
function prepareClass(data, prefix) {
  if (data == null) return null;
  return Array.isArray(data) ? data.map((c) => `${prefix}${c}`) : `${prefix}${data}`;
}

/**
 * Adjust the width and height of each individual cell
 *
 * https://bulma.io/documentation/grid/grid-cells/
 *
 * @type {m.Component<import('../attributes.mjs').MBExtraHelperAttributes & CellAttributes>}
 */
export const Cell = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { colFromEnd, colSpan, colStart, rowFromEnd, rowSpan, rowStart, ...rest } = attrs;
    const classes = toClass(
      prepareClass(colFromEnd, 'is-col-from-end-'),
      prepareClass(colStart, 'is-col-start-'),
      prepareClass(colSpan, 'is-col-span-'),
      prepareClass(rowFromEnd, 'is-row-from-end-'),
      prepareClass(rowStart, 'is-row-start-'),
      prepareClass(rowSpan, 'is-row-span-'),
      extracted
    );
    return m('.cell', { class: classes, ...rest }, children);
  }
};
