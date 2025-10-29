import m from 'mithril';
import { is, toClass } from '../util.mjs';

/**
 * @typedef {object} FormIcon
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {'left'|'right'} [side]
 * @prop {'solid'|'regular'|'brand'} [faStyle]
 * @prop {string} [faIcon]
 */

/**
 * An icon to be used within a Control element to add detail to inputs
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FormIcon>}
 */
export const Icon = {
  view: ({ attrs }) => {
    const { class: userClass = null, color, size, side, faIcon, faStyle, ...rest } = attrs;
    const spanClass = toClass(is({ color, size, side }));
    const iconClass = toClass([
      faStyle ? `fa-${faStyle}` : 'fa-solid',
      faIcon ? `fa-${faIcon}` : 'fa-circle-question'
    ]);
    return m('span.icon', { class: spanClass }, m('i', { class: iconClass }));
  }
};
