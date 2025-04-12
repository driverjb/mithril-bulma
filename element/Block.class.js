import m from 'mithril';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import z from 'zod';

/**
 * @typedef {object} BlockOptions
 * @prop {string[]} [class] Extra classes that should be applied to the block
 */

const blockSchema = z.object({
  class: schema.classSchema
});

/**
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent margin between them.
 *
 * Ref: https://bulma.io/documentation/elements/block/
 */
export class Block {
  /**
   *
   * @param {import('mithril').Vnode<BlockOptions>} vnode
   */
  constructor(vnode) {
    const att = blockSchema.parse(vnode.attrs);
    this.class = util.joinClass(['block', att.class]);
  }
  view({ children }) {
    return m('div', { class: this.class }, children);
  }
}
