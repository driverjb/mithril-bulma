import m from 'mithril';
import { extractClasses, has, is, toClass } from '../util.mjs';

/**
 * @typedef {object} BasicTagAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Tint} [tint]
 * @prop {"normal"|"medium"|"large"} [size]
 * @prop {boolean} [rounded]
 * @prop {boolean} [hoverable]
 * @prop {'a'|'button'|'div'|'span'} [element]
 */

/**
 * Small tag labels to insert anywhere
 *
 * The Bulma tag is a small but versatile element. It's very useful as a way to attach information
 * to a block or other component. Its size makes it also easy to display in numbers, making it
 * appropriate for long lists of items.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & BasicTagAttributes>}
 */
export const Simple = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const {
      class: userClass = null,
      color,
      size,
      tint,
      rounded,
      hoverable,
      element = 'span',
      ...rest
    } = attrs;
    const classes = toClass(is({ color, size, tint, rounded, hoverable }).concat(extracted));
    return m(`${element}.tag`, { class: classes, ...rest }, children);
  }
};

/**
 * A tag that allows for multiple tags to be grouped together as if they were a single tag. Allows
 * you to make singe tags with 2 colors and different text. Like [build|npm], etc.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Multipart = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.tags.has-addons', { class: classes, ...attrs }, children);
  }
};

/**
 * @typedef {object} TagGroupAttributes
 * @prop {boolean} [multiline]
 */

/**
 * Allows you to group tags together so that they flow with nice spacing and will spill over to
 * multiple lines if needed.
 *
 * https://bulma.io/documentation/elements/tag/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TagGroupAttributes>}
 */
export const List = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, multiline, ...rest } = attrs;
    const classes = [userClass, multiline ? 'is-grouped-multiline' : null]
      .filter(Boolean)
      .join(' ');
    return m('.field.is-grouped', { class: classes, ...rest }, children);
  }
};
