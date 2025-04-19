import m from 'mithril';
import * as j from '../jsdoc.js';
import * as u from '../util/index.js';
import * as s from '../schema/index.js';
import * as c from '../classes/index.js';
import z from 'zod';

/**
 * @typedef {object} ProgressOptionsExtras
 * @prop {number} [value]
 * @prop {number} [max]
 */

/**
 * @typedef {j.CommonOptions & z.infer<typeof c.color> & z.infer<typeof c.size> & ProgressOptionsExtras} ProgressOptions
 */

const schema = z
  .object({
    ...s.common.shape,
    ...c.size.shape,
    ...c.color.shape,
    value: z.number().min(0).optional(),
    max: z.number().min(1).optional()
  })
  .optional();

/**
 * Native HTML progress bars
 *
 * Ref: https://bulma.io/documentation/elements/progress/
 */
export const Progress = {
  /**
   *
   * @param {m.Vnode<ProgressOptions>} vnode
   */
  oninit(vnode) {
    const { data, error } = schema.safeParse(vnode.attrs);
    if (error) console.warn(error);
    else {
      vnode.state.classCompiled = u.transformClasses(data, 'progress');
      vnode.state.value = data.value;
      vnode.state.max = data.max;
    }
  },
  view(vnode) {
    return m('progress', {
      class: vnode.state.classCompiled,
      max: vnode.state.max,
      value: vnode.state.value
    });
  }
};
