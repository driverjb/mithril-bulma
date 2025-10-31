import m from 'mithril';

/**
 * @typedef {object} CheckboxAttributes
 * @prop {(e:Event)=>void} [oninput]
 * @prop {boolean} [checked]
 * @prop {boolean} [disabled]
 */

/**
 * The 2-state checkbox in its native format
 *
 * https://bulma.io/documentation/form/checkbox/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & CheckboxAttributes>}
 */
export const Checkbox = {
  view: ({ attrs }) => {
    const { class: userClass = null, oninput, disabled, checked, ...rest } = attrs;
    const classes = [userClass].filter(Boolean).join(' ');
    const type = 'checkbox';
    const finalAttributes = Object.assign(
      { class: classes, oninput, checked, disabled, ...rest },
      { type }
    );
    return m('input', finalAttributes);
  }
};

/**
 * The 2-state checkbox in its native format. This version creates a component via function call and
 * that component has its own internal state with a value that can be read and manipulated
 * programatically.
 *
 * https://bulma.io/documentation/form/checkbox/
 *
 * @param {boolean} initialValue
 * @returns {m.Component<import('../attributes.mjs').MbStandardAttributes & CheckboxAttributes> & {isChecked: ()=>boolean, setChecked: (v: boolean)=>void}}
 */
export function CheckboxAuto(initialValue = false) {
  let value = initialValue;
  return {
    isChecked: () => value,
    setChecked: (newValue) => (value = newValue),
    view: ({ attrs }) => {
      const oninput = (e) => {
        value = e.target.checked;
        if (attrs.oninput) attrs.oninput();
      };
      return m(
        Checkbox,
        Object.assign({}, attrs, {
          checked: attrs.checked !== undefined ? attrs.checked : value,
          oninput
        })
      );
    }
  };
}

/**
 * A list of checkboxes
 *
 * https://bulma.io/documentation/form/checkbox/#list-of-checkboxes
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const CheckboxGroup = {
  view: ({ attrs, children }) => m('.checkboxes', attrs, children)
};
