import m from 'mithril';
import { has, is, toClass } from '../util.mjs';

/**
 * @typedef {object} RadioEntry
 * @prop {string} [display]
 * @prop {string} [value]
 * @prop {boolean} [disabled]
 */

/**
 * @typedef {object} RadioAttributes
 * @prop {RadioEntry[]} [entries]
 * @prop {string} [group]
 * @prop {(value:string)=>void} [onselect]
 * @prop {string|number} [selected]
 */

/**
 * The mutually exclusive radio buttons in their native format
 *
 * https://bulma.io/documentation/form/radio/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & RadioAttributes>}
 */
export const RadioGroup = {
  view: ({ attrs }) => {
    const { class: userClass = null, entries = [], group, selected, onselect, ...rest } = attrs;
    const classes = toClass([userClass]);
    return m(
      '.radios',
      { class: classes, ...rest },
      entries.map((e) =>
        m(
          'label.radio',
          { class: e.disabled ? 'is-disabled' : null },
          m('input', {
            type: 'radio',
            name: group,
            value: e.value,
            disabled: e.disabled,
            checked: selected === e.value,
            onchange: (ev) => onselect?.(ev.target.value)
          }),
          e.display
        )
      )
    );
  }
};

/**
 * @typedef {object} RadioAutoFunctions
 * @property {()=>string|number|null} getSelectedValue
 * @property {(v:string|number)=>void} setSelectedValue
 */

/**
 * @typedef {m.Component<import('../attributes.mjs').MbStandardAttributes & RadioAttributes> & RadioAutoFunctions} RadioAutoComponent
 */

/**
 * Creates a radio group that provides programatic access to its value
 *
 * https://bulma.io/documentation/form/radio/
 *
 * @param {RadioAttributes} [c]
 * @returns {RadioAutoComponent}
 */
export function RadioGroupAuto(c = {}) {
  const config = Object.freeze(c);
  /** @type {string|number|null} */
  let selectedValue = c.selected ?? null;

  const setSelectedValue = (v) => (selectedValue = v);
  const getSelectedValue = () => selectedValue;

  return /** @type {RadioAutoComponent} */ ({
    getSelectedValue,
    setSelectedValue,
    view: ({ attrs }) => {
      // Wrap onselect to update our internal value
      const mergedAttrs = Object.assign({}, config, attrs, {
        selected: selectedValue,
        onselect: attrs.onselect
          ? (v) => {
              selectedValue = v;
              attrs.onselect(v);
            }
          : (v) => (selectedValue = v)
      });

      return m(RadioGroup, mergedAttrs);
    }
  });
}
