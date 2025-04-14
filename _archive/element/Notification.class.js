import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} NotificationOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color] background color for the notification
 * @prop {type.Color} [colorText] text color for the notification
 * @prop {boolean} [delete] show the delete button
 * @prop {function} [deleteSideEffect] an extra function that you want triggered when the
 * notification is closed
 */

const notificationSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c === 'none' ? '' : `is-${c}`)),
  colorText: schema.color.transform((c) => (c === 'none' ? '' : `has-text-${c}`)),
  delete: z.boolean().default(true),
  deleteSideEffect: z.function().optional()
});

/**
 * Bold notification blocks, to alert your users of something
 *
 * The notification is a simple colored block meant to draw the attention to the user about
 * something. As such, it can be used as a pinned notification in the corner of the viewport. That's
 * why it supports the use of the delete element.
 *
 * Ref: https://bulma.io/documentation/elements/notification/
 */
export class Notification {
  /**
   *
   * @param {m.Vnode<NotificationOptions>} vnode
   */
  constructor(vnode) {
    const att = notificationSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class, att.color, att.colorText]);
    this.delete = att.delete;
    this.deleteSideEffect = att.deleteSideEffect;
  }
  view({ children }) {
    return m(
      '.notification',
      { class: this.class },
      this.delete
        ? m('button.delete', {
            onclick: (e) => {
              e.target.parentNode.remove();
              if (this.deleteSideEffect) this.deleteSideEffect();
            }
          })
        : null,
      children
    );
  }
}
