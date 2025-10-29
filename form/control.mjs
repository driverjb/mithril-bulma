import m from 'mithril';
import { is, toClass } from '../util.mjs';

/**
 * @typedef {object} ControlAttributes
 * @prop {boolean} [loading]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {boolean} [iconLeft]
 * @prop {boolean} [iconRight]
 */

/**
 * A wrapper for other form elements that gives additional formatting and settings. Particularly if
 * you want to overaly icons on top.
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ControlAttributes>}
 */
export const Control = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, loading, size, iconLeft, iconRight, ...rest } = attrs;
    const classes = toClass(
      is({ loading, size }).concat([
        iconLeft ? 'has-icons-left' : null,
        iconRight ? 'has-icons-right' : null,
        userClass
      ])
    );
    return m('.control', { class: classes, ...rest }, children);
  }
};
