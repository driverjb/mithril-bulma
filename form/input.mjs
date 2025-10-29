import m from 'mithril';
import { is, toClass } from '../util.mjs';

/**
 * @typedef {object} InputAttributes
 * @prop {'text'|'password'|'date'|'time'|'datetime-local'|'email'|'number'|'range'|'month'|'week'|'color'} [type]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {string} [placeholder]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {(e:Event)=>void} [oninput]
 * @prop {string} [value]
 * @prop {number} [min]
 * @prop {number} [max]
 * @prop {number} [step]
 * @prop {boolean} [rounded]
 * @prop {boolean} [loading]
 * @prop {boolean} [disabled]
 * @prop {boolean} [readonly]
 * @prop {boolean} [isStatic]
 * @prop {boolean} [focused]
 */

/**
 * The text input and its variations
 *
 * https://bulma.io/documentation/form/input/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & InputAttributes>}
 */
export const Input = {
  view: ({ attrs }) => {
    const {
      class: userClass = null,
      color = null,
      focused = false,
      isStatic = false,
      size = null,
      rounded = false,
      type = 'text',
      oncreate,
      ...rest
    } = attrs;
    const classes = toClass(is({ color, size, rounded, isStatic }).concat([userClass]));
    const extraCreateHelp = (e) => {
      if (focused) e.dom.focus();
      if (oncreate) oncreate(e);
    };
    const finalAttributes = Object.assign(
      { class: classes, type, ...rest },
      { oncreate: extraCreateHelp }
    );
    return m('input.input', finalAttributes);
  }
};

/**
 * Creates a text element that allows for programatic access to its value.
 *
 * https://bulma.io/documentation/form/input/
 *
 * @param {InputAttributes} [config]
 * @param {string} [initalValue]
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & InputAttributes> & {getValue: ()=>string, setValue: (newValue: string)=>void}}
 */
export function InputAuto(config = {}, initalValue = '') {
  let value = initalValue;
  return {
    getValue: () => value,
    setValue: (newValue) => (value = newValue),
    view: ({ attrs }) => {
      const {
        oninput: extraInputHelp,
        value: throwAwayValue,
        ...rest
      } = Object.assign({}, config, attrs);
      return m(Input, {
        value,
        ...rest,
        oninput: (e) => {
          value = e.target.value;
          if (extraInputHelp) extraInputHelp(e);
        }
      });
    }
  };
}
