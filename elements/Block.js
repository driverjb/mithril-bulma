import m from 'mithril';
import * as j from '../jsdoc.js';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import z from 'zod';

/**
 * @typedef {j.CommonOptions & j.StandardColorOptions} BlockOptions
 */

//const schema = s.common;

const schema = z
  .object({
    ...s.common.shape,
    ...s.colorStandard.shape
  })
  .optional();

/**
 * The block element is a simple spacer tool. It allows sibling HTML elements to have a consistent margin between them.
 *
 * Ref: https://bulma.io/documentation/elements/block/
 */
export const Block = {
  /**
   *
   * @param {m.Vnode<BlockOptions>} vnode
   */
  oninit: (vnode) => {
    const { error, data } = schema.safeParse(vnode.attrs);
    if (error) console.warn(test.error);
    else vnode.state.classCompiled = u.transformClasses(data, 'block');
  },
  /**
   * @param {m.Vnode<BlockOptions>} vnode
   * @returns
   */
  view: (vnode) => {
    return m('div', { class: vnode.state.classCompiled }, vnode.children);
  }
};
