import m from 'mithril';

/**
 * @typedef {object} DropdownAttributes
 * @prop {boolean} [active]
 * @prop {boolean} [hoverable]
 * @prop {boolean} [dropup]
 * @prop {boolean} [right]
 */

/**
 * Main dropdown component that wraps all the internal components
 *
 * An interactive dropdown menu for discoverable content
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & DropdownAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, active, hoverable, dropup, right, ...rest } = attrs;
    const classes = [
      userClass,
      active ? `is-active` : null,
      hoverable ? 'is-hoverable' : null,
      dropup ? 'is-up' : null,
      right ? 'is-right' : null
    ]
      .filter(Boolean)
      .join(' ');
    return m('.dropdown', { class: classes, ...rest }, children);
  }
};

/**
 * Dropdown trigger component. Most commonly will have a button with icon as a child component.
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Trigger = {
  view: ({ attrs, children }) => m('.dropdown-trigger', attrs, children)
};

/**
 * Container that hides/displays the selectable options
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Content = {
  view: ({ attrs, children }) =>
    m('.dropdown-menu', { role: 'menu', ...attrs }, m('.dropdown-content', children))
};

/**
 * Dropdown menu item which should be nested in Dropdown.Content
 *
 * https://bulma.io/documentation/components/dropdown/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => m('.dropdown-item', attrs, children)
};
