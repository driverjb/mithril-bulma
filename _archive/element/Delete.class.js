import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} DeleteOptions
 * @prop {string[]} [class]
 * @prop {type.Size} [size]
 * @prop {function} [deleteEffect]
 */

const deleteSchema = z.object({
  class: schema.classSchema,
  size: schema.size,
  deleteEffect: z.function().optional()
});

/**
 * A versatile delete cross. Will automatically remove the parent element it's nested in and perform
 * an optionally provided function call.
 *
 * Ref: https://bulma.io/documentation/elements/delete/
 */
export const Content = {
  /**
   * @param {m.Vnode<DeleteOptions, {attrs: DeleteOptions}>} vnode
   */
  oninit(vnode) {
    const att = deleteSchema.parse(vnode.attrs);
    att.class = util.joinClass(['delete', att.class, att.size]);
    vnode.state.attrs = att;
  },
  /**
   * @param {m.Vnode<DeleteOptions, {attrs: DeleteOptions}>} vnode
   */
  onbeforeupdate(vnode) {
    const att = deleteSchema.parse(vnode.attrs);
    att.class = util.joinClass(['delete', att.class, att.size]);
    vnode.state.attrs = att;
  },
  /**
   * @param {m.Vnode<DeleteOptions, {attrs: DeleteOptions}>} vnode
   */
  view(vnode) {
    const { class: extraClass, deleteEffect } = vnode.state.attrs;
    return m('button', {
      class: extraClass,
      onclick: ({ target }) => {
        target.parentNode.remove();
        if (deleteEffect) deleteEffect();
      }
    });
  }
};
