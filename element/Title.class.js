import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TitleOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color]
 * @prop {"title"|"subtitle"} [type] Title or subtitle (default: title)
 * @prop {number} [size] Size of the title (default: 3)
 * @prop {boolean} [spaced] When you combine a title and a subtitle, they move closer together. This
 * setting is used to maintain the normal spacing
 * @prop {boolean} [dontUseHeaderTag] If you don't want to use the "h" tags, this will force the use
 * of the "p" tag.
 */

const titleSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c == 'none' ? '' : `has-text-${c}`)),
  type: z.enum(['title', 'subtitle']).default('title'),
  size: z
    .number()
    .min(1)
    .max(6)
    .default(3)
    .transform((s) => `is-${s}`),
  spaced: z
    .boolean()
    .default(false)
    .transform((s) => (s ? 'is-spaced' : '')),
  dontUseHeaderTag: z.boolean().default(false)
});

/**
 * Simple headings to add depth to your page
 *
 * Ref: https://bulma.io/documentation/elements/title/
 */
export class Title {
  /**
   *
   * @param {m.Vnode<TitleOptions>} vnode
   */
  constructor(vnode) {
    const att = titleSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class, att.color, att.size, att.spaced, att.type]);
    this.htmlElement = att.dontUseHeaderTag ? 'p' : att.size.replace('is-', 'h');
  }
  view({ children }) {
    return m(this.htmlElement, { class: this.class }, children);
  }
}
