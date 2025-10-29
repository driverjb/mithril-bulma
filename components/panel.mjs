import m from 'mithril';

/**
 * @typedef {object} PanelAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 */

/**
 * A composable panel, for compact controls
 *
 * https://bulma.io/documentation/components/panel/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & PanelAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { color, class: userClass = null, ...rest } = attrs;
    const classes = [color ? `is-${color}` : null, userClass].filter(Boolean).join(' ');
    return m('nav.panel', { class: classes, ...rest }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header = {
  view: ({ attrs, children }) => m('p.panel-heading', attrs, children)
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Block = {
  view: ({ attrs, children }) => m('.panel-block', attrs, children)
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const TabGroup = {
  view: ({ attrs, children }) => m('p.panel-tabs', attrs, children)
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Tab = {
  view: ({ attrs, children }) => m('a', attrs, children)
};
