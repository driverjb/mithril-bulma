import m from 'mithril';

/**
 * @typedef {object} BreadcrumbItemAttributes
 * @prop {string} href
 * @prop {string} [faIcon]
 * @prop {"regular"|"solid"} [faStyle]
 */

/**
 * @typedef {object} BreadcrumbAttributes
 * @prop {"left"|"centered"|"right"} [alignment]
 * @prop {"arrow"|"dot"|"bullet"|"succeeds"} [separator]
 * @prop {"small"|"medium"|"large"} [size]
 * @prop {string} [class]
 */

/**
 * A simple breadcrumb component to improve your navigation experience
 *
 * https://bulma.io/documentation/components/breadcrumb/
 *
 * @type {m.Component<BreadcrumbAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const {
      alignment = 'left',
      separator = null,
      class: userClass = null,
      size = null,
      ...rest
    } = attrs;
    const classes = [
      `is-${alignment}`,
      separator ? `has-${separator}-separator` : null,
      userClass,
      size ? `is-${size}` : null
    ]
      .filter(Boolean)
      .join(' ');
    return m('nav.breadcrumb', { class: classes, ...rest }, m('ul', children));
  }
};

/**
 * A breadcrumb item
 *
 * https://bulma.io/documentation/components/breadcrumb/
 *
 * @type {m.Component<BreadcrumbItemAttributes>}
 */
export const Item = {
  view: ({ attrs, children }) => {
    const {
      href = '#',
      icon = null,
      class: userClass = '',
      faIcon = null,
      faStyle = 'solid',
      ...rest
    } = attrs;
    const isActive = m.route.get() === href;
    const iconClasses = [icon ? `fa-${icon}` : null, faStyle === 'solid' ? 'fas' : 'fa'].filter(
      Boolean
    );
    return m(
      'li',
      { class: isActive ? `is-active ${userClass}` : `${userClass}`, ...rest },
      m(
        m.route.Link,
        { href },
        iconClasses.length === 2
          ? m('span.icon.is-small', m('i', { class: iconClasses.join(' ') }))
          : null,
        children
      )
    );
  }
};
