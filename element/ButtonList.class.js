import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} ButtonListOptions
 * @prop {string[]} [class]
 * @prop {type.Alignment} [align]
 * @prop {boolean} [connected]
 * @prop {type.Size} [size]
 */

const buttonGroupSchema = z.object({
  class: schema.classSchema,
  align: schema.alignment,
  connected: z
    .boolean()
    .default(false)
    .transform((c) => (c ? 'has-addons' : '')),
  size: schema.buttonGroup.size
});

/**
 * You can create a list of buttons by using the buttons container.
 *
 * Ref: https://bulma.io/documentation/elements/button/#list-of-buttons
 */
export class ButtonList {
  /**
   *
   * @param {m.Vnode<ButtonListOptions>} vnode
   */
  constructor(vnode) {
    const att = buttonGroupSchema.parse(vnode.attrs);
    this.class = util.joinClass(['buttons', att.align, att.connected, att.class, att.size]);
  }
  view({ children }) {
    return m('div', { class: this.class }, children);
  }
}
