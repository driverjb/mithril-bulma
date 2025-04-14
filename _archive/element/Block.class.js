import m from 'mithril';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import z from 'zod';

/**
 * @typedef {object} BlockOptions
 * @prop {string[] | string} [class] Extra classes to apply to the block element
 */

const blockSchema = z
  .object({
    class: schema.classSchema.default([])
  })
  .default({});

/**
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent margin between them.
 *
 * Ref: https://bulma.io/documentation/elements/block/
 */
export const Block = {
  oninit(vnode) {
    vnode.state.attrs = blockSchema.parse(vnode.attrs);
  },
  onbeforeupdate(vnode) {
    vnode.state.attrs = blockSchema.parse(vnode.attrs);
  },
  /**
   *
   * @param {m.Vnode<BlockOptions>} vnode
   * @returns
   */
  view(vnode) {
    const { children } = vnode;
    const { class: extraClass } = vnode.state.attrs;
    const className = util.joinClass(['block', extraClass]);
    return m('div', { class: className }, children);
  }
};
