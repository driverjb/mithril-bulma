import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} IconSettings
 * @prop {'regular'|'solid'|'brands'} [type]
 * @prop {string} [icon]
 * @prop {'small'|'medium'|'large'} [iconSize]
 * @prop {'small'|'medium'|'large'} [frameSize]
 * @prop {boolean} [border]
 * @prop {'spinner'|'pulse'} [animated]
 */

/**
 * Map icon size to FA sizing classes
 * @param {"small"|"medium"|"large"} [iconSize]
 */
function mapIconSize(iconSize) {
  switch (iconSize) {
    case 'medium':
      return 'fa-lg';
    case 'large':
      return 'fa-2x';
    default:
      return null;
  }
}

/**
 * Compatible with all icon font libraries, including Font Awesome 5
 *
 * The icon element is a container for any type of icon font. Because the icons can take a few
 * seconds to load, and because you want control over the space the icons will take, you can use the
 * icon class as a reliable square container that will prevent the page to "jump" on page load.
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & IconSettings>}
 */
export const Icon = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { type, icon, iconSize, frameSize, border, animated, ...rest } = attrs;
    const spanClasses = toClass(frameSize && `is-${frameSize}`, extracted);
    const iconClasses = toClass(
      animated && `fa-${animated}`,
      border && `fa-border`,
      type ? `fa-${type}` : 'fa-solid',
      icon ? `fa-${icon}` : 'fa-circle-question',
      mapIconSize(iconSize)
    );
    return m('span.icon', { class: spanClasses, ...rest }, m('i', { class: iconClasses }));
  }
};

/**
 * Put this inside the IconGroup element to add a label to an Icon
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const IconLabel = {
  view: ({ attrs, children }) =>
    m('span', { class: toClass(extractClasses(attrs)), ...attrs }, children)
};

/**
 * If you need to add a label to your icon, start with this element.
 *
 * https://bulma.io/documentation/elements/icon/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {inline: boolean}>}
 */
export const IconGroup = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { inline = true, ...rest } = attrs;
    const classes = toClass(extracted);
    return m(`${inline ? 'span' : 'div'}.icon-text`, { class: classes, ...rest }, children);
  }
};
