import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} TitleAttributes
 * @prop {1|2|3|4|5|6} [level]
 */

/**
 * Simple headings to add depth to your page
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleAttributes>}
 */
export const Title = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    let { level = 1, class: userClass = null, ...rest } = attrs;
    if (level < 1 || level > 6) level = 1;
    const classes = toClass(is({ level }).concat([userClass, ...extracted]));
    return m(`h${level}.title`, { class: classes, ...rest }, children);
  }
};

/**
 * A standard Subtitle
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleAttributes>}
 */
export const Subtitle = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    let { level = 1, class: userClass = null, ...rest } = attrs;
    if (level < 1 || level > 6) level = 1;
    const classes = toClass(is({ level }).concat([userClass, ...extracted]));
    return m(`h${level}.subtitle`, { class: classes, ...rest }, children);
  }
};

/**
 * @typedef {object} TitleGroupAttributes
 * @prop {1|2|3|4} [level]
 * @prop {string} title
 * @prop {string} subtitle
 */

/**
 * A pair of title and subtitle sized and spaced as recommended by bulma
 *
 * https://bulma.io/documentation/elements/title/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TitleGroupAttributes>}
 */
export const TitleGroup = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { title, subtitle, level, class: userClass = null, ...rest } = attrs;
    const titleLevel = level > 4 ? 4 : level < 1 ? 1 : level;
    const subLevel = titleLevel + 2;
    const titleClasses = toClass(is({ titleLevel }).concat(extracted));
    const subtitleClasses = toClass(is({ subLevel }).concat(extracted));
    return m(
      'div',
      { class: userClass },
      m('p.title', { class: titleClasses }, title),
      m('p.subtitle', { class: subtitleClasses }, subtitle)
    );
  }
};
