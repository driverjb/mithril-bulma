import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';

/**
 * @typedef {object} ImageOptions
 * @prop {string[]} [class]
 * @prop {'16x16'|'24x24'|'32x32'|'48x48'|'64x64'|'96x96'|'128x128'} size
 * @prop {'square'|'1x1'|'5x4'|'4x3'|'3x2'|'5x3'|'16x9'|'2x1'|'3x1'|'4x5'|'3x4'|'2x3'|'3x5'|'9x16'|'1x2'|'1x3'} ratio
 * @prop {boolean} rounded
 */

const imageSchema = z.object({
  class: schema.classSchema,
  size: z
    .enum(['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128', ''])
    .default('')
    .transform((s) => (s ? `is-${s}` : '')),
  rounded: schema.rounded,
  src: z.string()
});

/**
 * A container for responsive images (and other media)
 *
 * Ref: https://bulma.io/documentation/elements/image/
 */
export class Image {
  /**
   *
   * @param {m.Vnode<ImageOptions>} vnode
   */
  constructor(vnode) {
    const att = imageSchema.parse(vnode.attrs);
    this.class = util.joinClass(['image', att.class, att.size]);
    this.imageClass = util.joinClass([att.rounded]);
    this.src = att.src;
  }
  view() {
    return m('figure', { class: this.class }, m('img', { class: this.imageClass, src: this.src }));
  }
}
