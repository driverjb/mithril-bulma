import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TableRowOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color]
 */

const tableRowSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c == 'none' ? '' : `is-${c}`)),
  selected: z
    .boolean()
    .default(false)
    .transform((s) => (s ? 'is-selected' : ''))
});

/**
 * A row that should be added to a table. You don't need to use this, but it helps with some
 * auto-completed class features.
 *
 * Ref: https://bulma.io/documentation/elements/table/
 */
export class TableRow {
  /**
   *
   * @param {m.Vnode<TableRowOptions>} vnode
   */
  constructor(vnode) {
    const att = tableRowSchema.parse(vnode.attrs);
    this.class = util.joinClass([att.class, att.color, att.selected]);
  }
  view({ children }) {
    return m('tr', { class: this.class }, children);
  }
}
