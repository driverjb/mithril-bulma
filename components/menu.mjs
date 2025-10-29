import m from 'mithril';

/**
 * A Menu container
 *
 * A simple menu, for any type of vertical navigation
 *
 * https://bulma.io/documentation/components/menu/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => m('aside.menu', attrs, children)
};

/**
 * A Menu label
 *
 * https://bulma.io/documentation/components/menu/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Label = {
  view: ({ attrs, children }) => m('p.menu-label', attrs, children)
};

/**
 * A Menu list that should contain Items and Dropdowns
 *
 * https://bulma.io/documentation/components/menu/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const List = {
  view: ({ attrs, children }) => m('ul.menu-list', attrs, children)
};

/**
 * A Menu item
 *
 * https://bulma.io/documentation/components/menu/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, onclick, href, ...rest } = attrs;
    const classes = [m.route.get() === href ? 'is-active' : '', userClass]
      .filter(Boolean)
      .join(' ');
    return m(
      'li',
      m(
        m.route.Link,
        {
          class: classes,
          href,
          ...rest
        },
        children
      )
    );
  }
};
