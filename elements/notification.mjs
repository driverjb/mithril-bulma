import m from 'mithril';
import { Delete } from './delete.mjs';
import { extractClasses, toClass, is } from '../util.mjs';

/**
 * @typedef {object} NotificationAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {boolean} [closeButton]
 * @prop {string} text
 * @prop {number} notificationIndex
 */

/**
 * @typedef {object} NotificationDefinition
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {string} text
 * @prop {number} [expiresInMs]
 * @prop {string} [class]
 */

/**
 * Bold notification blocks, to alert your users of something
 *
 * The notification is a simple colored block meant to draw the attention to the user about
 * something. As such, it can be used as a pinned notification in the corner of the viewport. That's
 * why it supports the use of the delete element.
 *
 * https://bulma.io/documentation/elements/notification/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & NotificationAttributes>}
 */
const Notification = {
  view: ({ attrs }) => {
    const extracted = extractClasses(attrs);
    const { color, closeButton, notificationIndex, ...rest } = attrs;
    const classes = toClass(is({ color }), extracted);
    return m(
      '.notification',
      { class: classes, ...rest },
      closeButton
        ? m(Delete, {
            onclick: () => {
              notifications.splice(notificationIndex, 1);
              m.redraw();
            }
          })
        : null,
      attrs.text
    );
  }
};

/**
 * @typedef {object} TickCounter
 * @prop {number} tick
 */

/** @type {Array<NotificationDefinition & TickCounter>} */
const notifications = [];
/** @type {number} */
let watcher = null;
let checkFrequency = 100;

function observe() {
  for (let i = notifications.length - 1; i >= 0; i--) {
    const n = notifications[i];
    if (typeof n.expiresInMs === 'number' && n.tick >= n.expiresInMs) {
      notifications.splice(i, 1);
      m.redraw();
    }
    n.tick += checkFrequency;
  }
  if (notifications.length === 0) clearInterval(watcher);
}

/**
 * An element that should be added to any layout that requires the use of notifications. There is no
 * styling applied to this element. It's highly recommended to use something like position fixed or
 * absolute to place it over your app.
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const NotificationManager = {
  setCheckFrequency(newFrequency) {
    checkFrequency = newFrequency;
    if (watcher !== null) {
      clearInterval(watcher);
      watcher = setInterval(observe, checkFrequency);
    }
  },
  clear() {
    notifications.splice(0, notifications.length);
    if (watcher !== null) {
      clearInterval(watcher);
      watcher = null;
    }
  },
  /**
   * Add a notification to the notification manager
   * @param {NotificationDefinition} note
   */
  add(note) {
    note.expiresInMs = typeof note.expiresInMs != 'number' ? 0 : note.expiresInMs;
    if (note.expiresInMs < 0) note.expiresInMs = note.expiresInMs * -1;
    notifications.push({ ...note, tick: 0 });
    m.redraw();
    if (watcher === null) watcher = setInterval(observe, checkFrequency);
  },
  view: ({ attrs }) => {
    const { class: userClass = null, ...rest } = attrs;
    return m(
      'div',
      { class: userClass, ...rest },
      notifications.map(({ text, color, expiresInMs, ...rest }, i) =>
        m(Notification, {
          color,
          text,
          closeButton: expiresInMs === 0,
          notificationIndex: i,
          ...rest
        })
      )
    );
  }
};
