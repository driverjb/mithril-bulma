import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TableOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {boolean} [fullWidth]
 * @prop {boolean} [border]
 * @prop {boolean} [striped]
 * @prop {boolean} [narrow]
 * @prop {boolean} [hoverable]
 * @prop {boolean} [scrollable]
 */

const tableSchema = z.object({
  class: schema.classSchema,
  fullWidth: schema.fullWidth,
  border: z
    .boolean()
    .default(false)
    .transform((b) => (b ? 'is-bordered' : '')),
  striped: z
    .boolean()
    .default(false)
    .transform((s) => (s ? 'is-striped' : '')),
  narrow: z
    .boolean()
    .default(false)
    .transform((n) => (n ? 'is-narrow' : '')),
  hoverable: z
    .boolean()
    .default(false)
    .transform((h) => (h ? 'is-hoverable' : '')),
  scrollable: z.boolean().default(false)
});

/**
 * The inevitable HTML table, with special case cells
 *
 * Ref: https://bulma.io/documentation/elements/table/
 */
export class Table {
  /**
   *
   * @param {m.Vnode<TableOptions>} vnode
   */
  constructor(vnode) {
    const att = tableSchema.parse(vnode.attrs);
    this.class = util.joinClass([
      'table',
      att.border,
      att.class,
      att.fullWidth,
      att.hoverable,
      att.narrow,
      att.striped
    ]);
    this.scrollable = att.scrollable;
  }
  view({ children }) {
    return this.scrollable
      ? m('.table-container', m('table', { class: this.class }, children))
      : m('table', { class: this.class }, children);
  }
}
