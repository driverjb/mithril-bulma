import m from 'mithril';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import * as c from '../classes/index.js';
import z from 'zod';

const schema = z
  .object({
    ...s.common.shape,
    ...c.color.shape,
    ...c.noRadius.shape,
    ...c.size.shape,
    delete: z.union([z.boolean(), z.function()]).default(true)
  })
  .optional();

/**
 * A versatile delete cross
 *
 * Ref: https://bulma.io/documentation/elements/delete/
 */
export const Delete = {
  /**
   *
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else {
      vnode.state.classCompiled = u.transformClasses(data, 'delete');
      vnode.state.delete = data.delete;
    }
  },
  /**
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   * @returns
   */
  view(vnode) {
    return m('button.delete', {
      class: vnode.state.classCompiled,
      onclick: (e) => {
        if (typeof vnode.state.delete == 'boolean' && vnode.state.delete)
          e.target.parentElement.remove();
        if (typeof vnode.state.delete == 'function') vnode.state.delete(e);
      }
    });
  }
};
