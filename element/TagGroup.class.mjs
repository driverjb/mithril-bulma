import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TagGroupOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color]
 * @prop {boolean} [light]
 * @prop {type.Size} [size]
 * @prop {boolean} [connected]
 */

const tagGroupSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c == 'none' ? '' : `is-${c}`)),
  light: z
    .boolean()
    .default(false)
    .transform((l) => (l ? 'is-light' : '')),
  size: schema.buttonGroup.size,
  connected: z
    .boolean()
    .default(false)
    .transform((c) => (c ? 'has-addons' : ''))
});

/**
 * A Group of tags with some fancy inheritable properties.
 *
 * Ref: https://bulma.io/documentation/elements/tag/#Group-of-tags
 */
export class TagGroup {
  /**
   *
   * @param {m.Vnode<TagGroupOptions>} vnode
   */
  constructor(vnode) {
    const att = tagGroupSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class, att.color, att.light, att.size, att.connected]);
  }
  view({ children }) {
    return m('.control', m('.tags', { class: this.class }, children));
  }
}
