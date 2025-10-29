import m from 'mithril';
import { is, has, toClass } from '../util.mjs';

/**
 * @typedef {object} FileAttributes
 * @prop {string} [fileName]
 * @prop {import('../attributes.mjs').Alignment} [alignment]
 * @prop {boolean} [fullWidth]
 * @prop {boolean} [boxed]
 * @prop {import('../attributes.mjs').Color} [color]
 * @prop {(e:Event)=>void} [onchange]
 */

/**
 * A custom file upload input, without JavaScript
 *
 * https://bulma.io/documentation/form/file/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & FileAttributes>}
 */
export const File = {
  view: ({ attrs, children }) => {
    const {
      class: userClass = null,
      name,
      fileName,
      alignment = null,
      fullWidth = false,
      boxed = false,
      color = null,
      onchange
    } = attrs;
    const classes = toClass(
      is({ fullWidth, alignment, boxed, color }).concat(has({ name })).concat([userClass])
    );
    return m(
      '.file',
      { class: classes },
      m(
        'label.file-label',
        m('input.file-input', { type: 'file', name, onchange }),
        m(
          'span.file-cta',
          m('span.file-icon', m('i.fas.fa-upload')),
          m('span.file-label', children)
        ),
        fileName ? m('span.file-name', fileName) : null
      )
    );
  }
};

/**
 * @typedef {object} FileAutoFunctions
 * @property {()=>File} getFile
 * @property {(v:File)=>void} setFile
 */

/**
 * @typedef {m.Component<import('../attributes.mjs').MbStandardAttributes & FileAttributes> & FileAutoFunctions} FileAutoComponent
 */

/**
 * @param {FileAttributes} [c]
 * @returns {FileAutoComponent}
 */
export function FileAuto(c, buttonText = 'Select File...') {
  const config = c;
  /** @type {File} */
  let file = null;
  return /** @type {FileAutoComponent} */ {
    getFile: () => file,
    setFile: (newFile) => (file = newFile),
    view: ({ attrs, children }) => {
      const merged = Object.assign({}, config, attrs);
      const onchange = (e) => {
        file = e.target.files[0];
        if (merged.onchange) return merged.onchange(e);
      };
      merged.fileName = file ? file.name : null;
      return m(
        File,
        Object.assign(merged, { onchange }),
        children.length > 0 ? children : buttonText
      );
    }
  };
}
