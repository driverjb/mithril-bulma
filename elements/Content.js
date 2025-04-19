import m from 'mithril';
import * as j from '../jsdoc.js';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import * as c from '../classes/index.js';
import z from 'zod';

/**
 * @typedef {j.CommonOptions & j.StandardColorOptions & z.infer<typeof c.size>} ContentOptions
 */

const schema = z
  .object({
    ...s.common.shape,
    ...s.colorStandard.shape,
    ...c.size.shape
  })
  .optional();

/**
 * A single class to handle WYSIWYG generated content, where only HTML tags are available.
 *
 * Ref: https://bulma.io/documentation/elements/content/
 */
export const Content = {
  /**
   * @param {m.Vnode<ContentOptions>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else vnode.state.classCompiled = u.transformClasses(data, 'content');
  },
  /**
   * @param {m.Vnode<ContentOptions>} vnode
   */
  view(vnode) {
    const { children } = vnode;
    return m('div', { class: vnode.state.classCompiled }, children);
  }
};
