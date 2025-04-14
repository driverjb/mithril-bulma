import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';
import * as util from '../util/index.js';

/**
 * @typedef {object} IconOptions
 * @prop {string[]|string} [classIcon]
 * @prop {string[]|string} [classWrapper]
 * @prop {type.IconSize} [size]
 * @prop {number} [sizeManual]
 * @prop {type.FontAwesomeRegularIcon} [iconRegular]
 * @prop {type.FontAwesomeSolidIcon} [iconSolid]
 * @prop {type.Color} [color]
 */

const iconSchema = z.object({
  classIcon: schema.classSchema,
  classWrapper: schema.classSchema,
  color: schema.color,
  iconRegular: z.string().optional(),
  iconSolid: z.string().optional(),
  size: schema.icon.size.optional(),
  sizeManual: schema.icon.sizeManual.optional()
});

function determineAttributes(attrs) {
  const att = iconSchema.parse(attrs);
  att.classWrapper = util.joinClass([
    att.classWrapper,
    'icon',
    att.color ? att.color.replace(att.color, `has-text-${att.color}`) : '',
    'mb-child-pointer-events-none'
  ]);
  if (att.size && att.sizeManual)
    throw new Error('You may only use one size indicator: size or sizeManual');
  if (att.iconRegular) {
    const icon = schema.icon.regular.parse(att.iconRegular);
    att.classIcon = util.joinClass([
      att.size,
      att.sizeManual,
      att.classIcon,
      'fa-regular',
      `fa-${icon}`
    ]);
  } else if (att.iconSolid) {
    const icon = schema.icon.solid.parse(att.iconSolid);
    att.classIcon = util.joinClass([
      att.size,
      att.sizeManual,
      att.classIcon,
      'fa-solid',
      `fa-${icon}`
    ]);
  } else throw new Error(`You must provided one of: iconRegular or iconSolid`);
  return att;
}

/**
 * Compatible with all icon font libraries, including Font Awesome 5
 *
 * Ref: https://bulma.io/documentation/elements/icon/
 */
export const Icon = {
  /**
   * @param {m.Vnode<IconOptions, {attrs: IconOptions}>} vnode
   */
  oninit(vnode) {
    vnode.state.attrs = determineAttributes(iconSchema.parse(vnode.attrs));
  },
  /**
   * @param {m.Vnode<IconOptions, {attrs: IconOptions}>} vnode
   */
  onbeforeupdate(vnode) {
    vnode.state.attrs = determineAttributes(iconSchema.parse(vnode.attrs));
  },
  /**
   * @param {m.Vnode<IconOptions, {attrs: IconOptions}>} vnode
   */
  view(vnode) {
    const { children } = vnode;
    const { classIcon, classWrapper } = vnode.state.attrs;
    return m(
      'span',
      {
        class: classWrapper
      },
      m('i', {
        class: classIcon
      }),
      children
        ? children.map((c) => {
            if (typeof c === 'string') return m('span', c);
            else return c;
          })
        : null
    );
  }
};
