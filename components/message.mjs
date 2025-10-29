import m from 'mithril';
//TODO https://bulma.io/documentation/components/message/

/**
 * @typedef {object} MessageAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 */

/**
 * Colored message blocks, to emphasize part of your page
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & MessageAttributes>}
 */
export const Main = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, color, size, ...rest } = attrs;
    const classes = [userClass, color ? `is-${color}` : null, size ? `is-${size}` : null]
      .filter(Boolean)
      .join(' ');
    return m('article.message', { class: classes, ...rest }, children);
  }
};

/**
 * Header container for Message
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header = {
  view: ({ attrs, children }) => m('.message-header', attrs, children)
};

/**
 * Body container for Message
 *
 * https://bulma.io/documentation/components/message/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body = {
  view: ({ attrs, children }) => m('.message-body', attrs, children)
};
