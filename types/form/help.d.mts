/**
 * @typedef {object} HelpAttributes
 * @prop {import('../attributes.mjs').Color} [colorGuide] Color of text before input is provided
 * @prop {import('../attributes.mjs').Color} [colorValid] Color of text when the input is valid
 * @prop {import('../attributes.mjs').Color} [colorInvalid] Color of text when the input is invalid
 * @prop {string} [textGuide] Text to display when no input is present
 * @prop {string} [textValid] Text to display when input is valid
 * @prop {string} [textInvalid] Text to display when input is invalid
 * @prop {boolean|null} [valid] Controls the display state of the help text
 */
/**
 * A context aware help text with many settings for helping the user see what's required of an input.
 *
 * https://bulma.io/documentation/form/general/
 *
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes & HelpAttributes>}
 */
export const Help: m.Component<import("../attributes.mjs").MbStandardAttributes & HelpAttributes>;
export type HelpAttributes = {
    /**
     * Color of text before input is provided
     */
    colorGuide?: import("../attributes.mjs").Color;
    /**
     * Color of text when the input is valid
     */
    colorValid?: import("../attributes.mjs").Color;
    /**
     * Color of text when the input is invalid
     */
    colorInvalid?: import("../attributes.mjs").Color;
    /**
     * Text to display when no input is present
     */
    textGuide?: string;
    /**
     * Text to display when input is valid
     */
    textValid?: string;
    /**
     * Text to display when input is invalid
     */
    textInvalid?: string;
    /**
     * Controls the display state of the help text
     */
    valid?: boolean | null;
};
import m from 'mithril';
