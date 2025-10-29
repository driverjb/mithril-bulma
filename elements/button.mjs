import m from 'mithril';
import { extractClasses, is, toClass } from '../util.mjs';

/**
 * @typedef {object} ButtonAttributes
 * @prop {"anchor"|"button"|"submit"|"reset"} [type]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Tint} [tint]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {boolean} [fullwidth]
 * @prop {boolean} [responsive]
 * @prop {boolean} [outlined]
 * @prop {boolean} [inverted]
 * @prop {boolean} [rounded]
 * @prop {boolean} [loading]
 * @prop {boolean} [static]
 * @prop {boolean} [disabled]
 * @prop {(e: Event)=> void} [onclick]
 */

/**
 * Return the correct html element for the given button type
 * @param {"anchor"|"button"|"submit"|"reset"} type
 * @return {"a"|"button"|"input"}
 */
function determineHtmlElement(type) {
  switch (type) {
    case 'anchor':
      return 'a';
    case 'button':
      return 'button';
    case 'reset':
    case 'submit':
      return 'input';
    default:
      return 'button';
  }
}

/**
 * The classic button, in different colors, sizes, and states
 *
 * The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.
 *
 * https://bulma.io/documentation/elements/button/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ButtonAttributes>}
 */
export const Button = {
  view: ({ attrs, children }) => {
    const extracted = extractClasses(attrs);
    const {
      type,
      color,
      tint,
      size,
      responsive,
      fullwidth,
      outlined,
      inverted,
      rounded,
      loading,
      disabled,
      static: isStatic,
      ...rest
    } = attrs;
    const htmlElement = determineHtmlElement(type);
    const inputType = htmlElement === 'input' ? type : null;
    const classes = toClass(
      is({
        color,
        tint,
        size,
        responsive,
        fullwidth,
        outlined,
        inverted,
        rounded,
        loading,
        isStatic
      }),
      extracted
    );
    return m(`${htmlElement}.button`, { type: inputType, class: classes, ...rest }, children);
  }
};
