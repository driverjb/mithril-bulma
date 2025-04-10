import m from 'mithril';
import * as schema from '../schema/index.js';
import * as type from '../types.js';
import z from 'zod';

/**
 * @typedef {object} ButtonOptions
 * @prop {string[]} [class]
 * @prop {type.Color} [color] Color of the button (default: none)
 * @prop {type.ColorStyle} [colorStyle] Color style of the button (default: normal)
 * @prop {type.Size} [size] Size of the button (default: normal)
 * @prop {type.ButtonType} [type] Type of button (default: button)
 * @prop {boolean} [outlined] Draw the button as an outline (default: false)
 * @prop {boolean} [inverted] Flip the text and background colors (default: false)
 * @prop {boolean} [responsive] Does the button behave within the response layout (default: false)
 * @prop {boolean} [fullWidth] Does the button stretch to fill the parent container (default: false)
 * @prop {boolean} [rounded] Button edges will be rounded (default: false)
 * @prop {boolean} [hovered] Force the hovered style onto the button (default: false)
 * @prop {boolean} [focused] Force the focused style onto the button (default: false)
 * @prop {boolean} [active] Force the active style onto the button (default: false)
 * @prop {boolean} [loading] Force the loading style onto the button (default: false)
 * @prop {boolean} [static] The button will render but not be clickable (default: false)
 * @prop {boolean|()=>boolean} [disabled] The button is disabled (default: false)
 * @prop {function} [onclick] What to do when the button is clicked
 * @prop {boolean} [wrapWithControl] Place the button in a 'control' wrapper so it can be added to field-groups
 */

const buttonSchema = z.object({
  active: schema.active,
  class: schema.classSchema,
  color: schema.button.color,
  colorStyle: schema.button.colorStyle,
  disabled: schema.disabled,
  focused: schema.focused,
  fullWidth: schema.fullWidth,
  hovered: schema.hovered,
  inverted: schema.button.inverted,
  loading: schema.loading,
  outlined: schema.button.outlined,
  responsive: schema.responsive,
  rounded: schema.rounded,
  size: schema.size,
  static: schema.isStatic,
  type: schema.button.type,
  onclick: z.function().optional(),
  wrapWithControl: z.boolean().default(false)
});

const button = {
  view: ({ attrs, children }) =>
    m(
      'button',
      {
        class: attrs.class,
        disabled: attrs.disabled() ? 'disabled' : '',
        type: attrs.type
      },
      children
        ? children.map((c) => {
            if (typeof c == 'string') return m('span', c);
            else return c;
          })
        : null
    )
};

/**
 * The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.
 *
 * Ref: https://bulma.io/documentation/elements/button/
 */
export class Button {
  /**
   *
   * @param {import('mithril').Vnode<ButtonOptions>} vnode
   */
  constructor(vnode) {
    const att = buttonSchema.parse(vnode.attrs);
    /** @type {string} */
    this.class = [
      'button',
      att.active,
      att.class,
      att.color,
      att.colorStyle,
      att.focused,
      att.fullWidth,
      att.hovered,
      att.inverted,
      att.loading,
      att.outlined,
      att.responsive,
      att.rounded,
      att.size,
      att.static
    ]
      .filter((c) => !!c)
      .join(' ');
    /** @type {"button" | "submit" | "reset"} */
    this.type = att.type;
    /** @type {"disabled"|""} */
    this.disabled = att.disabled;
    this.text = att.text;
    this.control = att.wrapWithControl;
  }
  view({ children }) {
    return this.control
      ? m(
          'p.control',
          m(button, { class: this.class, disabled: this.disabled, type: this.type }, children)
        )
      : m(button, { class: this.class, disabled: this.disabled, type: this.type }, children);
    // m(
    //   'button',
    //   {
    //     class: this.class,
    //     disabled: this.disabled() ? 'disabled' : '',
    //     type: this.type
    //   },
    //   children
    //     ? children.map((c) => {
    //         if (typeof c == 'string') return m('span', c);
    //         else return c;
    //       })
    //     : null
    // );
  }
}
