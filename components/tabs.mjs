import m from 'mithril';

/**
 * @typedef {object} TabsAttributes
 * @prop {'centered'|'right'|'left'} [align]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {'boxed'|'toggle'|'toggle-rounded'} [theme]
 * @prop {boolean} [fullwidth]
 */

/**
 * Simple responsive horizontal navigation tabs, with different styles
 *
 * https://bulma.io/documentation/components/tabs/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & TabsAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { align, size, theme, fullwidth, class: userClass = null, ...rest } = attrs;
    let themCheck = theme;
    if (themCheck === 'toggle-rounded') themCheck = `toggle is-toggle-rounded`;
    const classes = [
      align ? `is-${align}` : null,
      size ? `is-${size}` : null,
      themCheck ? `is-${themCheck}` : null,
      fullwidth ? `is-fullwidth` : null,
      userClass
    ]
      .filter(Boolean)
      .join(' ');
    return m('.tabs', { class: classes, ...rest }, m('ul', children));
  }
};

/**
 * An entry in a list of tabs
 *
 * https://bulma.io/documentation/components/tabs/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {active: boolean, onclick: (e: Event)=>void}>}
 */
export const Entry = {
  view: ({ attrs, children }) => {
    const { active, onclick, ...rest } = attrs;
    const classes = [active ? 'is-active' : null].filter(Boolean).join(' ');
    return m('li', { class: classes, ...rest }, m('a', { onclick }, children));
  }
};
