import m from 'mithril';

/**
 * @typedef {object} PaginationAttributes
 * @prop {boolean} [rounded]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {boolean} [centered]
 */

/**
 * A responsive, usable, and flexible pagination
 *
 * https://bulma.io/documentation/components/pagination/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & PaginationAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { centered, rounded, size, class: userClass = null, ...rest } = attrs;
    const classes = [
      centered ? 'is-centered' : null,
      rounded ? 'is-rounded' : null,
      size ? `is-${size}` : null,
      userClass
    ]
      .filter(Boolean)
      .join(' ');
    return m('nav.pagination', { class: classes, ...rest }, children);
  }
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Previous = {
  view: ({ attrs, children }) =>
    m('a.pagination-previous', attrs, children.length > 0 ? children : 'Previous')
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Next = {
  view: ({ attrs, children }) =>
    m('a.pagination-next', attrs, children.length > 0 ? children : 'Next')
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const PageList = {
  view: ({ attrs, children }) => m('ul.pagination-list', attrs, children)
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => m('li', m('a.pagination-link', attrs, children))
};

/**
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Elipsis = {
  view: () => m('li', m('span.pagination-ellipsis', m.trust('&hellip;')))
};
