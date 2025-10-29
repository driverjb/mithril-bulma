import m from 'mithril';

/**
 * @typedef {object} ModalAttributes
 * @prop {boolean} [cardMode]
 */

/**
 * A classic modal overlay, in which you can include any content you want
 *
 * https://bulma.io/documentation/components/modal/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ModalAttributes>}
 */
export const Frame = {
  view: ({ attrs, children }) => {
    const { class: userClass = null, cardMode, ...rest } = attrs;
    const classes = ['is-active', userClass].filter(Boolean).join(' ');
    const mode = cardMode ? 'card' : 'content';
    return m(
      '.modal',
      { class: classes, ...rest },
      m('.modal-background'),
      m(
        `.modal-${mode}`,
        m('.button.modal-close.is-large', {
          onclick: () => {
            if (attrs.onClose) attrs.onClose();
            Manager.clear();
          }
        }),
        children
      )
    );
  }
};

/**
 * A modal header container. Normally contains Modal.Title and Delete components
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header = {
  view: ({ attrs, children }) => m('header.modal-card-head', attrs, children)
};

/**
 * The modal title - should be nested within a modal header
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Title = {
  view: ({ attrs, children }) => m('p.modal-card-title', attrs, children)
};

/**
 * Contains the main content of the modal
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body = {
  view: ({ attrs, children }) => m('section.modal-card-body', attrs, children)
};

/**
 * Contains the bottom edge of a modal. A common component would be .buttons {button, button, ...}
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Footer = {
  view: ({ attrs, children }) => m('footer.modal-card-foot', attrs, children)
};

const modals = [];

/**
 * Add this control to your main view if you are using modals. Then to show a modal, call the "add"
 * function
 */
export const Manager = {
  /** Add a new modal to the list */
  add(component, attributes) {
    modals.push({ component, attributes });
    m.redraw();
  },
  /** Clears the modal on the top of the stack */
  clear() {
    modals.splice(modals.length - 1, 1);
    m.redraw();
  },
  view: () => {
    if (modals.length === 0) return null;
    const { component, attributes } = modals[modals.length - 1];
    const { onClose, ...rest } = attributes;
    return m(component, {
      ...rest,
      onClose: () => {
        if (onClose) onClose();
        Manager.clear();
      }
    });
  }
};
