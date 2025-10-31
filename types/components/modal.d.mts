/**
 * @typedef {object} ModalAttributes
 * @prop {boolean} [cardMode]
 */
/**
 * A classic modal overlay, in which you can include any content you want
 *
 * https://bulma.io/documentation/components/modal/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & ModalAttributes>}
 */
export const Frame: m.Component<import("../attributes.mjs").MbStandardAttributes & ModalAttributes>;
/**
 * A modal header container. Normally contains Modal.Title and Delete components
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Header: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * The modal title - should be nested within a modal header
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Title: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * Contains the main content of the modal
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Body: m.Component<import("../attributes.mjs").MbStandardAttributes>;
/**
 * Contains the bottom edge of a modal. A common component would be .buttons {button, button, ...}
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const Footer: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export namespace Manager {
    /** Add a new modal to the list */
    function add(component: any, attributes: any): void;
    /** Clears the modal on the top of the stack */
    function clear(): void;
    function view(): any;
}
export type ModalAttributes = {
    cardMode?: boolean;
};
