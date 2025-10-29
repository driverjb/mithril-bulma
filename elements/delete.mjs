import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} DeleteAttributes
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {(e: Event)=> void} [onclick]
 */

/**
 * A versatile delete cross
 *
 * The delete element is a stand-alone element that can be used in different contexts.
 *
 * https://bulma.io/documentation/elements/delete/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DeleteAttributes>}
 */
export const Delete = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { size = null, ...rest } = attrs;
    const classes = toClass(is({ size }), extracted);
    return m('button.delete', { class: classes, ...rest });
  }
};
