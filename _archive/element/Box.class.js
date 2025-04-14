import m from 'mithril';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import z from 'zod';

/**
 * @typedef {object} BoxOptions
 * @prop {string[] | string} [class] Extra classes to apply to the box element
 */

const boxSchema = z
  .object({
    class: schema.classSchema.default([])
  })
  .default({});

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export const Box = {
  oninit(vnode) {
    vnode.state.attrs = boxSchema.parse(vnode.attrs);
  },
  onbeforeupdate(vnode) {
    vnode.state.attrs = boxSchema.parse(vnode.attrs);
  },
  /**
   *
   * @param {m.Vnode<BoxOptions>} vnode
   * @returns
   */
  view(vnode) {
    const { children } = vnode;
    const { class: extraClass } = vnode.state.attrs;
    const className = util.joinClass(['box', extraClass]);
    return m('div', { class: className }, children);
  }
};
