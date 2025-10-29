import m from 'mithril';

/**
 * A responsive horizontal navbar that can support images, links, buttons, and dropdowns
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {fixed: "top"|"bottom"}>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { class: userClass, fixed, ...rest } = attrs;
    const classes = [userClass, fixed ? `is-fixed-${fixed}` : null].filter(Boolean).join(' ');
    return m('nav.navbar', { class: classes, ...rest }, children);
  }
};

/**
 * @typedef {object} NavbarBrandAttributes
 * @prop {(e: Event)=>void} [onclick]
 */

/**
 * Most commonly contains a link with a nested image
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & NavbarBrandAttributes>}
 */
export const Brand = {
  view: ({ attrs, children }) => {
    const { onclick, ...rest } = attrs;
    return m(
      '.navbar-brand',
      rest,
      children,
      m('a.navbar-burger', { onclick }, m('span'), m('span'), m('span'), m('span'))
    );
  }
};

/**
 * The menu option portion of the navbar (this part will be hidden on mobile unless clicked)
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & {id: string}>}
 */
export const Menu = {
  view: ({ attrs, children }) => m('.navbar-menu', attrs, children)
};

/**
 * The left side of the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Start = {
  view: ({ attrs, children }) => m('.navbar-start', attrs, children)
};

/**
 * The right side of the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const End = {
  view: ({ attrs, children }) => m('.navbar-end', attrs, children)
};

/**
 * @typedef {object} NavbarItemAttributes
 * @prop {boolean} [hardLink]
 * @prop {string} [href]
 */

/**
 * A menu item
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & NavbarItemAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => {
    const { hardLink, class: userClass = null, href, ...rest } = attrs;
    const element = href ? (hardLink ? 'a' : m.route.Link) : 'div';
    const classes = [userClass, 'navbar-item'].filter(Boolean).join(' ');
    return m(element, { class: classes, href, ...rest }, children);
  }
};

/**
 * @typedef {object} DropdownAttributes
 * @prop {string} name
 * @prop {boolean} [hoverable]
 */

/**
 * Navbar dropdown — supports hoverable and click modes.
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DropdownAttributes>}
 */
export const Dropdown = {
  oninit: ({ state }) => {
    state.expand = false;
  },
  view: ({ attrs, children, state }) => {
    const { class: userClass, name, hoverable, ...rest } = attrs;
    const classes = [
      'navbar-item',
      'has-dropdown',
      hoverable ? 'is-hoverable' : null,
      state.expand && !hoverable ? 'is-active' : null,
      userClass
    ]
      .filter(Boolean)
      .join(' ');
    const linkAttrs = hoverable
      ? {}
      : {
          onclick: (e) => {
            e.preventDefault();
            state.expand = !state.expand;
          }
        };
    const dropdownChildren = children.map((c) => {
      const oldClick = c.attrs?.onclick;
      return {
        ...c,
        attrs: {
          ...c.attrs,
          onclick: (e) => {
            if (oldClick) oldClick(e);
            // In hoverable mode, "force-close" by briefly disabling the class
            if (hoverable) {
              const dropdownEl = e.target.closest('.has-dropdown.is-hoverable');
              if (dropdownEl) {
                dropdownEl.classList.remove('is-hoverable');
                // Restore after a short delay so hover works again next time
                setTimeout(() => dropdownEl.classList.add('is-hoverable'), 100);
              }
            } else {
              state.expand = false;
              m.redraw();
            }
          }
        }
      };
    });

    return m(
      'div',
      { class: classes, ...rest },
      m('a.navbar-link', linkAttrs, name),
      m('.navbar-dropdown', dropdownChildren)
    );
  }
};

/**
 * A divider line to place on the menu
 *
 * https://bulma.io/documentation/components/navbar/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Divider = {
  view: ({ attrs }) => m('hr.navbar-divider', attrs)
};
