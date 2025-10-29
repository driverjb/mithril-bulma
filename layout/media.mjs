import m from 'mithril';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * The famous media object prevalent in social media interfaces, but useful in any context
 *
 * https://bulma.io/documentation/layout/media-object/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('article.media', { class: classes, ...attrs }, children);
  }
};

/**
 * The left side of the media component
 *
 * https://bulma.io/documentation/layout/media-object/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Left = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('figure.media-left', { class: classes, ...attrs }, children);
  }
};

/**
 * The right side of the media component
 *
 * https://bulma.io/documentation/layout/media-object/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Right = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.media-right', { class: classes, ...attrs }, children);
  }
};

/**
 * The main media content
 *
 * https://bulma.io/documentation/layout/media-object/
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Content = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const classes = toClass(extracted);
    return m('.media-content', { class: classes, ...attrs }, children);
  }
};
