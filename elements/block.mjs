import m from 'mithril';
import { extractClasses, toClass } from '../util.mjs';

/**
 * Bulma’s most basic spacer block
 *
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent
 * margin between them:
 *
 * https://bulma.io/documentation/elements/block/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Block = {
  view: ({ attrs, children }) =>
    m('.block', { class: toClass(extractClasses(attrs)), ...attrs }, children)
};
