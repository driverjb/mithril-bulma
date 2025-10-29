import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} SectionAttributes
 * @prop {'medium'|'large'} [spacing]
 */

/**
 * A simple container to divide your page into sections, like the one you’re currently reading
 *
 * https://bulma.io/documentation/layout/section/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & SectionAttributes>}
 */
export const Section = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { spacing, ...rest } = attrs;
    const classes = toClass(is({ spacing }), extracted);
    return m('section.section', { class: classes, ...rest }, children);
  }
};
