import m from 'mithril';
import { has, is, toClass } from '../util.mjs';

/**
 * @typedef {object} SelectAttributes
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {import('../attributes.mjs').Size} [size]
 * @prop {number} [multiple]
 * @prop {boolean} [rounded]
 * @prop {boolean} [loading]
 * @prop {boolean} [focused]
 * @prop {(e:Event)=>void} [onselect]
 */

/**
 * The browser built-in select dropdown, styled accordingly
 *
 * https://bulma.io/documentation/form/select/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & SelectAttributes>}
 */
export const Select = {
  view: ({ attrs, children }) => {
    const {
      class: userClass = null,
      color = null,
      icon = null,
      size = null,
      multiple = null,
      rounded = null,
      loading = false,
      focused = false,
      onselect,
      initialize,
      ...rest
    } = attrs;
    const selectClasses = toClass(is({ size, color, multiple, rounded, loading }));
    return m(
      '.select',
      { class: selectClasses, ...rest },
      m(
        'select',
        { multiple: multiple, size: size, oninput: onselect, oncreate: initialize },
        children
      )
    );
  }
};

/**
 * @typedef {object} SelectAutoFunctions
 * @param {()=>string} getSelectedValue
 * @param {()=>number} getSelectedIndex
 */

/**
 * Creates a select component that provides programatic access to its value
 *
 * https://bulma.io/documentation/form/select/
 *
 * @param {SelectAttributes} c
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & SelectAttributes> & SelectAutoFunctions}
 */
export function SelectAuto(c = {}) {
  const config = Object.freeze(c);
  let selectedIndex = 0;
  let selectedValue = null;
  const initialize = ({ dom }) => {
    selectedIndex = dom.selectedIndex;
    selectedValue = dom.value;
  };
  return /** @type {m.Component<import('../attributes.mjs').MbStandardAttributes & SelectAttributes> & SelectAutoFunctions} */ {
    getSelectedValue: () => selectedValue,
    getSelectedIndex: () => selectedIndex,
    view: ({ attrs, children }) => {
      attrs.initialize = initialize;
      attrs.onselect = attrs.onselect
        ? (e) => {
            selectedIndex = e.target.selectedIndex;
            selectedValue = e.target.value;
            attrs.onselect(e);
          }
        : (e) => {
            selectedIndex = e.target.selectedIndex;
            selectedValue = e.target.value;
          };
      return m(Select, Object.assign({}, config, attrs), children);
    }
  };
}
