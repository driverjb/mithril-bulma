import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';

/**
 * @typedef {object} IFrameOptions
 * @prop {string[]} [class]
 * @prop {'square'|'1x1'|'5x4'|'4x3'|'3x2'|'5x3'|'16x9'|'2x1'|'3x1'|'4x5'|'3x4'|'2x3'|'3x5'|'9x16'|'1x2'|'1x3'} [ratio]
 * @prop {boolean} [rounded]
 * @prop {number} [width]
 * @prop {number} [height]
 * @prop {boolean} [frameBorder]
 * @prop {boolean} [allowFullScreen]
 * @prop {string} [src]
 * @prop {boolean} [fullWidth]
 */

const frameSchema = z.object({
  class: schema.classSchema,
  width: z.number().min(1).optional(),
  height: z.number().min(1).optional(),
  ratio: z
    .enum([
      'square',
      '1x1',
      '5x4',
      '4x3',
      '3x2',
      '5x3',
      '16x9',
      '2x1',
      '3x1',
      '4x5',
      '3x4',
      '2x3',
      '3x5',
      '9x16',
      '1x2',
      '1x3',
      'none'
    ])
    .default('none')
    .transform((r) => {
      if (r === 'none') return '';
      else return r === 'square' ? 'is-square' : `is-${r.replace('x', 'by')}`;
    }),
  frameBorder: z
    .boolean()
    .default(false)
    .transform((f) => (f ? '1' : '0')),
  allowFullScreen: z
    .boolean()
    .default(false)
    .transform((f) => (f ? 'allowfullscreen' : '')),
  src: z.string().url(),
  fullWidth: schema.fullWidth
});

/**
 * A container for responsive images (and other media)
 *
 * Ref: https://bulma.io/documentation/elements/image/
 */
export class IFrame {
  /**
   *
   * @param {m.Vnode<IFrameOptions>} vnode
   */
  constructor(vnode) {
    const att = frameSchema.parse(vnode.attrs);
    this.class = util.joinClass(['image', att.class, att.fullWidth, att.ratio]);
    this.frameClass = util.joinClass(['has-ratio', att.fullWidth]);
    this.width = att.width;
    this.height = att.height;
    this.frameBorder = att.frameBorder;
    this.allowFullScreen = att.allowFullScreen;
    this.src = att.src;
  }
  view() {
    return m(
      'figure',
      { class: this.class },
      m('iframe', {
        class: this.frameClass,
        width: this.width,
        height: this.height,
        src: this.src,
        frameborder: this.frameBorder,
        allowfullscreen: this.allowFullScreen
      })
    );
  }
}
