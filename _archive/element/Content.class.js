import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} ContentOptions
 * @prop {string[]} [class]
 * @prop {type.Alignment} [align]
 * @prop {boolean} [connected]
 * @prop {type.Size} [size]
 */

const contentSchema = z.object({
  class: schema.classSchema,
  size: schema.size
});

/**
 * A single class to handle WYSIWYG generated content, where only HTML tags are available.
 *
 * Ref: https://bulma.io/documentation/elements/content/
 */
export const Content = {
  /**
   * @param {m.Vnode<ContentOptions, {attrs: ContentOptions}>} vnode
   */
  oninit(vnode) {
    const att = contentSchema.parse(vnode.attrs);
    att.class = util.joinClass(['content', att.class, att.size]);
    vnode.state.attrs = att;
  },
  /**
   * @param {m.Vnode<ContentOptions, {attrs: ContentOptions}>} vnode
   */
  onbeforeupdate(vnode) {
    const att = contentSchema.parse(vnode.attrs);
    att.class = util.joinClass(['content', att.class, att.size]);
    vnode.state.attrs = att;
  },
  /**
   * @param {m.Vnode<ContentOptions, {attrs: ContentOptions}>} vnode
   */
  view(vnode) {
    const { children } = vnode;
    const { class: extraClass } = vnode.state.attrs;
    return m('div', { class: extraClass }, children);
  }
};
