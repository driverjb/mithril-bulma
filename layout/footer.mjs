import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc.
 *
 * https://bulma.io/documentation/layout/footer/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Section = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('footer.footer', { class: classes, ...attrs }, children);
  }
};
