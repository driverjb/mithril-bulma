import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} HeroAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {'small'|'medium'|'large'|'half-height'|'fullheight'|'fullheight-with-navbar'} [size]
 */

/**
 * An imposing hero banner to showcase something
 *
 * https://bulma.io/documentation/layout/hero/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & HeroAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { color, size, ...rest } = attrs;
    const classes = toClass(is({ color, size }), extracted);
    return m('section.hero', { class: classes, ...rest }, children);
  }
};

/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body = {
  view: ({ attrs, children }) => {
    const classes = toClass(extractClasses(attrs));
    return m('.hero-body', { class: classes, ...attrs }, children);
  }
};

/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header = {
  view: ({ attrs, children }) => {
    const classes = toClass(extractClasses(attrs));
    return m('.hero-head', { class: classes, ...attrs }, children);
  }
};

/**
 * https://bulma.io/documentation/layout/hero/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Footer = {
  view: ({ attrs, children }) => {
    const classes = toClass(extractClasses(attrs));
    return m('.hero-foot', { class: classes, ...attrs }, children);
  }
};
