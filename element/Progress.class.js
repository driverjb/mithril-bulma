import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} ProgressOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color] background color for the notification
 * @prop {type.Size} [size] the size of the progress bar
 * @prop {number} [value] current value of the progress bar
 * @prop {number} [max] maximum value of the progress bar
 */

const progressSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c === 'none' ? '' : `is-${c}`)),
  size: schema.size,
  value: z.number().min(0).optional(),
  max: z.number().min(1).default(100)
});

/**
 * Native HTML progress bars
 *
 * Ref: https://bulma.io/documentation/elements/progress/
 */
export class Progress {
  /**
   *
   * @param {m.Vnode<ProgressOptions>} vnode
   */
  constructor(vnode) {
    const att = progressSchema.parse(vnode.attrs);
    this.class = util.joinClass(['progress', att.class, att.color, att.size]);
    this.max = att.max;
    this.value = att.value;
  }
  view() {
    return m('progress', { class: this.class, max: this.max, value: this.value });
  }
}
