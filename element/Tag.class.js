import m from 'mithril';
import z from 'zod';
import * as schema from '../schema/index.js';
import * as util from '../util/index.js';
import * as type from '../types.js';

/**
 * @typedef {object} TagOptions
 * @prop {string[]} [class] extra classes that you want applied to the notification
 * @prop {type.Color} [color]
 * @prop {type.Color} [colorText]
 * @prop {boolean} [light]
 * @prop {type.Size} [size]
 * @prop {'span'|'a'|'button'|'div'} [element] Fine control over which element is used (default: span)
 * @prop {function} [delete] display a fancy cross instead of text
 * @prop {function} [onclick]
 * @prop {boolean} [hoverable]
 */

const tagSchema = z.object({
  class: schema.classSchema,
  color: schema.color.transform((c) => (c == 'none' ? '' : `is-${c}`)),
  colorText: schema.color.transform((c) => (c == 'none' ? '' : `has-text-${c}`)),
  light: z
    .boolean()
    .default(false)
    .transform((l) => (l ? 'is-light' : '')),
  size: schema.size,
  hoverable: z
    .boolean()
    .default(true)
    .transform((h) => (h ? 'is-hoverable' : '')),
  delete: z
    .boolean()
    .default(false)
    .transform((d) => (d ? 'is-delete' : '')),
  onclick: z.function().optional()
});

/**
 *
 * @param {HTMLElement} e
 * @return {HTMLElement}
 */
function findParent(e) {
  let safety = 0;
  let wrapper = null;
  do {
    //found top level for tags
    if (e.parentElement.classList.contains('tags')) {
      wrapper = e.parentElement;
      //might need to pull a full control
    } else if (e.parentElement.classList.contains('control')) {
      wrapper = e.parentElement;
    } else {
      //something else, get outta here
      break;
    }
    e = e.parentElement;
    safety++;
  } while (safety < 10);
  return wrapper;
}

/**
 * Small tag labels to insert anywhere
 *
 * Ref: https://bulma.io/documentation/elements/tag/
 */
export class Tag {
  /**
   *
   * @param {m.Vnode<TagOptions>} vnode
   */
  constructor(vnode) {
    const att = tagSchema.parse(vnode.attrs);
    this.class = util.joinClass([
      'tag',
      att.class,
      att.color,
      att.light,
      att.size,
      att.delete,
      att.hoverable,
      att.colorText
    ]);
    this.onclick = att.onclick;
    this.delete = !!att.delete;
  }
  view({ children }) {
    return m(
      'span',
      {
        class: this.class,
        onclick: (e) => {
          if (this.delete) findParent(e.target).remove();
          if (this.onclick) this.onclick(e);
        }
      },
      children
    );
  }
}
