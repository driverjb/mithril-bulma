import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';

/**
 * @typedef {object} TagCollectionOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 *
 */

const tagGroupSchema = z.object({
  class: schema.classSchema
});

/**
 * A collection of "grouped tags"
 *
 * Ref: https://bulma.io/documentation/elements/tag/#Group-of-tags
 */
export class TagCollection {
  /**
   *
   * @param {m.Vnode<TagCollectionOptions>} vnode
   */
  constructor(vnode) {
    const att = tagGroupSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class]);
  }
  view({ children }) {
    return m('.field.is-grouped.is-multilined', { class: this.class }, children);
  }
}
