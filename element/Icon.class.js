import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} IconOptions
 * @prop {string[]} [class]
 * @prop {type.IconSize} [size]
 * @prop {number} [sizeManual]
 * @prop {type.FontAwesomeRegularIcon} [iconRegular]
 * @prop {type.FontAwesomeSolidIcon} [iconSolid]
 * @prop {type.Color} [color]
 */

const iconSchema = z.object({
  class: schema.classSchema,
  classIcon: schema.classSchema,
  classWrapper: schema.classSchema,
  color: schema.color.transform((c) => (c !== 'none' ? `has-text-${c}` : '')),
  iconRegular: z.string().optional(),
  iconSolid: z.string().optional(),
  size: schema.icon.size.optional(),
  sizeManual: schema.icon.sizeManual.optional()
});

/**
 * A versatile delete cross
 *
 * Ref: https://bulma.io/documentation/elements/delete/
 */
export class Icon {
  /**
   *
   * @param {m.Vnode<IconOptions>} vnode
   */
  constructor(vnode) {
    const att = iconSchema.parse(vnode.attrs);
    this.wrapperClass = util.joinClass([att.classWrapper, 'icon', att.color]);
    if (att.size && att.sizeManual)
      throw new Error('You may only use one size indicator: size or sizeManual');
    if (att.iconRegular) {
      const icon = schema.icon.regular.parse(att.iconRegular);
      this.iconClass = util.joinClass([
        att.size,
        att.sizeManual,
        att.classIcon,
        'fa-regular',
        `fa-${icon}`
      ]);
    } else if (att.iconSolid) {
      const icon = schema.icon.solid.parse(att.iconSolid);
      this.iconClass = util.joinClass([
        att.size,
        att.sizeManual,
        att.classIcon,
        'fa-solid',
        `fa-${icon}`
      ]);
    } else throw new Error(`You must provided one of: iconRegular or iconSolid`);
  }
  view({ children }) {
    return m(
      'span',
      { class: this.wrapperClass },
      m('i', { class: this.iconClass }),
      children
        ? children.map((c) => {
            if (typeof c === 'string') return m('span', c);
            else return c;
          })
        : null
    );
  }
}
