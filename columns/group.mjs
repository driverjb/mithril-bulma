import m from 'mithril';
import { is, toClass, extractClasses } from '../util.mjs';

/**
 * @typedef {'is-gapless'|'1'|'1-mobile'|'1-touch'|'1-tablet'|'1-tablet-only'|'1-desktop'|'1-desktop-only'|'1-widescreen'|'1-widescreen-only'|'1-fullhd'|'2'|'2-mobile'|'2-touch'|'2-tablet'|'2-tablet-only'|'2-desktop'|'2-desktop-only'|'2-widescreen'|'2-widescreen-only'|'2-fullhd'|'3'|'3-mobile'|'3-touch'|'3-tablet'|'3-tablet-only'|'3-desktop'|'3-desktop-only'|'3-widescreen'|'3-widescreen-only'|'3-fullhd'|'4'|'4-mobile'|'4-touch'|'4-tablet'|'4-tablet-only'|'4-desktop'|'4-desktop-only'|'4-widescreen'|'4-widescreen-only'|'4-fullhd'|'5'|'5-mobile'|'5-touch'|'5-tablet'|'5-tablet-only'|'5-desktop'|'5-desktop-only'|'5-widescreen'|'5-widescreen-only'|'5-fullhd'|'6'|'6-mobile'|'6-touch'|'6-tablet'|'6-tablet-only'|'6-desktop'|'6-desktop-only'|'6-widescreen'|'6-widescreen-only'|'6-fullhd'|'7'|'7-mobile'|'7-touch'|'7-tablet'|'7-tablet-only'|'7-desktop'|'7-desktop-only'|'7-widescreen'|'7-widescreen-only'|'7-fullhd'|'8'|'8-mobile'|'8-touch'|'8-tablet'|'8-tablet-only'|'8-desktop'|'8-desktop-only'|'8-widescreen'|'8-widescreen-only'|'8-fullhd'|'9'|'9-mobile'|'9-touch'|'9-tablet'|'9-tablet-only'|'9-desktop'|'9-desktop-only'|'9-widescreen'|'9-widescreen-only'|'9-fullhd'|'10'|'10-mobile'|'10-touch'|'10-tablet'|'10-tablet-only'|'10-desktop'|'10-desktop-only'|'10-widescreen'|'10-widescreen-only'|'10-fullhd'|'11'|'11-mobile'|'11-touch'|'11-tablet'|'11-tablet-only'|'11-desktop'|'11-desktop-only'|'11-widescreen'|'11-widescreen-only'|'11-fullhd'|'12'|'12-mobile'|'12-touch'|'12-tablet'|'12-tablet-only'|'12-desktop'|'12-desktop-only'|'12-widescreen'|'12-widescreen-only'|'12-fullhd'} ColumnGap
 */

/**
 * @typedef {object} ColumnGroupAttributes
 * @prop {ColumnGap} [gap]
 * @prop {boolean} [mobile]
 * @prop {boolean} [centeredVertical] Will the row of columns be veritcally centered with each other?
 * @prop {boolean} [multiline] Cause columns to wrap after exceeding the number of allowed columns on a single line
 * @prop {Array<import('../attributes.mjs').Breakpoint>|import('../attributes.mjs').Breakpoint} [breakpoint]
 * @prop {boolean} [centered]
 */

/**
 * A simple way to build responsive columns. Should be filled with Column.Entry components
 *
 * https://bulma.io/documentation/columns/basics/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ColumnGroupAttributes>}
 */
export const Group = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const {
      mobile = false,
      gap = '3',
      centeredVertical = false,
      multiline = false,
      centered = false,
      ...rest
    } = attrs;
    const classes = toClass(
      is({ mobile, gap, multiline, centered }),
      centeredVertical ? 'is-vcentered' : null,
      Array.isArray(narrowBreakpoint)
        ? narrowBreakpoint.map((n) => `is-${n}`)
        : `is-${narrowBreakpoint}`,
      extracted
    );
    m('.columns', { class: classes, ...rest }, children);
  }
};
