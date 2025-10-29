import m from 'mithril';
import { extractClasses, toClass } from '../util.mjs';

/**
 * A white box to contain other elements
 *
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * https://bulma.io/documentation/elements/box/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Box = {
  view: ({ attrs, children }) =>
    m('.box', { class: toClass(extractClasses(attrs)), ...attrs }, children)
};
