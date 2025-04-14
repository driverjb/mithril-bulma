import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} BreadcrumbOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Alignment} [align]
 * @prop {'slash'|'arrow'|'bullet'|'dot'|'succeeds'} [separators]
 * @prop {type.Size} [size]
 */

const breadcrumbSchema = z.object({
  class: schema.classSchema,
  align: schema.alignment,
  separators: z.enum(['slash', 'arrow', 'bullet', 'dot', 'succeeds']).default('slash'),
  size: schema.size
});

/**
 * A simple breadcrumb component to improve your navigation experience
 *
 * Ref: https://bulma.io/documentation/components/breadcrumb/#
 */
export class Breadcrumbs {
  /**
   *
   * @param {m.Vnode<BreadcrumbOptions>} vnode
   */
  constructor(vnode) {
    const att = breadcrumbSchema.parse(vnode.attrs);
    this.class = util.joinClass(['breadcrumb', att.class, att.align, att.separators, att.size]);
  }
  view({ children }) {
    return m('nav', { class: this.class }, m('ul', children));
  }
}
