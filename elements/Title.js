import m from 'mithril';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import z from 'zod';

const schema = z
  .object({
    ...s.common.shape,
    ...s.colorStandard.shape,
    size: z.number().min(1).max(6).default(3),
    type: z.enum(['title', 'subtitle']).default('title'),
    dontUseHeadings: z.boolean().default(false),
    isSpaced: z.boolean().default(false)
  })
  .optional();

/**
 * The box element is a simple container with a white background, some padding, and a box shadow.
 *
 * Ref: https://bulma.io/documentation/elements/box/
 */
export const Title = {
  /**
   *
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else {
      vnode.state.classCompiled = u.transformClasses(
        data,
        data.type,
        data.isSpaced ? 'is-spaced' : ''
      );
      vnode.state.element = data.dontUseHeadings ? 'p' : `h${data.size}`;
    }
  },
  /**
   * @param {m.Vnode<z.infer<typeof schema>>} vnode
   * @returns
   */
  view(vnode) {
    return m(vnode.state.element, { class: vnode.state.classCompiled }, vnode.children);
  }
};
