import m from 'mithril';
import { is, has, toClass } from '../util.mjs';

/**
 * @typedef {object} LabelAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {import('../attributes.mjs').Color} [color]
 */

/**
 * A label to added to a Field grouping
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LabelAttributes>}
 */
export const Label = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, size = null, color = null, ...rest } = attrs;
    const classes = toClass([userClass].concat(is({ size })).concat(has({ color })));
    return m('label.label', { class: classes, ...rest }, children);
  }
};
