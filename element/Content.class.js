import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} ContentOptions
 * @prop {string[]} [class]
 * @prop {type.Alignment} [align]
 * @prop {boolean} [connected]
 * @prop {type.Size} [size]
 */

const contentSchema = z.object({
  class: schema.classSchema,
  size: schema.size
});

/**
 * A single class to handle WYSIWYG generated content, where only HTML tags are available.
 *
 * Ref: https://bulma.io/documentation/elements/content/
 */
export class Content {
  /**
   *
   * @param {m.Vnode<ContentOptions>} vnode
   */
  constructor(vnode) {
    const att = contentSchema.parse(vnode.attrs);
    this.class = util.joinClass(['content', att.class, att.size]);
  }
  view({ children }) {
    return m('div', { class: this.class }, children);
  }
}
