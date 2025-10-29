import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} LevelAttributes
 * @prop {boolean} [mobile]
 */

/**
 * A multi-purpose horizontal level, which can contain almost any other element
 *
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LevelAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { mobile = false, ...rest } = attrs;
    const classes = toClass(is({ mobile }), extracted);
    return m('nav.level', { class: classes, ...rest }, children);
  }
};

/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Left = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.level-left', { class: classes, ...attrs }, children);
  }
};

/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Right = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.level-right', { class: classes, ...attrs }, children);
  }
};

/**
 * @typedef {object} LevelItemAttributes
 * @prop {boolean} [centered]
 */

/**
 * https://bulma.io/documentation/layout/level/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & LevelItemAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const { centered = false, ...rest } = attrs;
    const classes = toClass(centered ? 'has-text-centered' : null, extracted);
    return m('.level-item', { class: classes, ...rest }, children);
  }
};
