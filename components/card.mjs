import m from 'mithril';

/**
 * Main card wrapper component
 *
 * An all-around flexible and composable component
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => m('.card', attrs, children)
};

/**
 * Card header wrapper. This should contain HeaderTitle and HeaderIcon componets
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header = {
  view: ({ attrs, children }) => m('header.card-header', attrs, children)
};

/**
 * Header title
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const HeaderTitle = {
  view: ({ attrs, children }) => m('p.card-header-title', attrs, children)
};

/**
 * Header icon that is right alinged. This should have an Icon component as a child component
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const HeaderIcon = {
  view: ({ attrs, children }) => m('button.card-header-icon', attrs, children)
};

/**
 * Wrapper that should contain an item component using ratios.
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Image = {
  view: ({ attrs, children }) => m('.card-image', attrs, children)
};

/**
 * Contains any content that makes up the main body of the card.
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Content = {
  view: ({ attrs, children }) => m('.card-content', attrs, children)
};

/**
 * Forms a list of rectangular items along the bottom of the card.
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Footer = {
  view: ({ attrs, children }) => m('footer.card-footer', attrs, children)
};

/**
 * Properly sizes the child content into a footer item
 *
 * https://bulma.io/documentation/components/card/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const FooterItem = {
  view: ({ attrs, children }) => m('.card-footer-item', attrs, children)
};
