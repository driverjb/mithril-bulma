import m from 'mithril';
import * as j from '../jsdoc.js';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import * as c from '../classes/index.js';
import z from 'zod';

const schema = z
  .object({
    ...s.common.shape,
    ...c.color.shape,
    ...c.noRadius.shape,
    delete: z.union([z.boolean(), z.function()]).default(false)
  })
  .optional();

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export const Notification = {
  /**
   *
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else {
      vnode.state.classCompiled = u.transformClasses(data, 'notification');
      vnode.state.delete = data.delete;
    }
  },
  /**
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   * @returns
   */
  view(vnode) {
    return m(
      'div',
      { class: vnode.state.classCompiled },
      vnode.state.delete
        ? m('button.delete', {
            onclick: (e) => {
              e.target.parentElement.remove();
              if (typeof vnode.state.delete == 'function') vnode.state.delete();
            }
          })
        : null,
      vnode.children
    );
  }
};
