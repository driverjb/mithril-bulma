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
export function FileAuto(c?: FileAttributes, buttonText?: string): FileAutoComponent;
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
export const File: m.Component<import("../attributes.mjs").MbStandardAttributes & FileAttributes>;
export type FileAutoFunctions = {
    getFile: () => File;
    setFile: (v: File) => void;
};
export type FileAutoComponent = m.Component<import("../attributes.mjs").MbStandardAttributes & FileAttributes> & FileAutoFunctions;
export type FileAttributes = {
    fileName?: string;
    alignment?: import("../attributes.mjs").Alignment;
    fullWidth?: boolean;
    boxed?: boolean;
    color?: import("../attributes.mjs").Color;
    onchange?: (e: Event) => void;
};
