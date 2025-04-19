import m from 'mithril';
import * as j from '../jsdoc.js';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import * as c from '../classes/index.js';
import z from 'zod';

/**
 * @typedef {j.CommonOptions & z.infer<typeof c.noRadius> & z.infer<typeof c.noShadow> & j.StandardColorOptions} BoxOptions
 */

const schema = z
  .object({
    ...s.common.shape,
    ...s.colorStandard.shape,
    ...c.noRadius.shape,
    ...c.noShadow.shape
  })
  .optional();

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export const Box = {
  /**
   *
   * @param {m.Vnode<BoxOptions>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else vnode.state.classCompiled = u.transformClasses(data, 'box');
  },
  /**
   * @param {m.Vnode<BoxOptions>} vnode
   * @returns
   */
  view(vnode) {
    return m('div', { class: vnode.state.classCompiled }, vnode.children);
  }
};
