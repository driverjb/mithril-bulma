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
export class Delete {
  /**
   *
   * @param {m.Vnode<DeleteOptions>} vnode
   */
  constructor(vnode) {
    const att = deleteSchema.parse(vnode.attrs);
    this.class = util.joinClass(['delete', att.class, att.size]);
    this.deleteEffect = att.deleteEffect;
  }
  view() {
    return m('button', {
      class: this.class,
      onclick: ({ target }) => {
        target.parentNode.remove();
        if (this.deleteEffect) this.deleteEffect();
      }
    });
  }
}
