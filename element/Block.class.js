import m from 'mithril';
import { classSchema } from '../schema/index.js';

/**
 * @typedef {object} BlockOptions
 * @prop {string[]} [class] Extra classes that should be applied to the block
 */

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
    this.class = classSchema.parse(vnode.attrs.class).trim();
  }
  view({ children }) {
    return m('.block', { class: this.class.trim() }, children);
  }
}
