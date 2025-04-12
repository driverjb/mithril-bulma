import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TableCellOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color]
 * @prop {boolean} [isHeader]
 */

const tableCellSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c == 'none' ? '' : `is-${c}`)),
  isHeader: z.boolean().default(false)
});

/**
 * A cell that should be added to a TableRow. This is optional, but it helps with auto-complete.
 *
 * Ref: https://bulma.io/documentation/elements/table/
 */
export class TableCell {
  /**
   *
   * @param {m.Vnode<TableCellOptions>} vnode
   */
  constructor(vnode) {
    const att = tableCellSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class, att.color]);
    this.htmlElement = att.isHeader ? 'th' : 'td';
  }
  view({ children }) {
    return m(this.htmlElement, { class: this.class }, children);
  }
}
