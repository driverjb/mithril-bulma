import m from 'mithril';
import z from 'zod';
import * as cl from '../classes.js';
import * as c from '../common.js';
import * as t from '../types.js';

/**
 * @typedef {object} ProgressOptionsExtras
 * @prop {"small"|"normal"|"medium"|"large"} [size]
 * @prop {t.ColorText} [color]
 * @prop {number} [value]
 * @prop {number} [max]
 */

/**
 * @typedef {t.CommonOptions & t.ColorOptions & ProgressOptionsExtras} ProgressOptions
 */

const progressSchema = z.object({
  size: z
    .enum(['small', 'medium', 'normal', 'large'])
    .transform((a) => `is-${a}`)
    .optional(),
  color: cl.MbColor,
  value: z.number().min(0).optional(),
  max: z.number().min(1).optional()
});

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
    const commonClass = c.prepareCommonOptions(vnode.attrs);
    const { size, max, value, color } = progressSchema.parse(vnode.attrs);
    vnode.state.attrs = {
      classCompiled: c.prepareClasses(['progress', ...commonClass, color, size])
    };
    vnode.state.value = value;
    vnode.state.max = max;
  },
  view(vnode) {
    return m('progress', {
      class: vnode.state.attrs.classCompiled,
      max: vnode.state.max,
      value: vnode.state.value
    });
  }
};
