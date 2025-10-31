/**
 * An element that should be added to any layout that requires the use of notifications. There is no
 * styling applied to this element. It's highly recommended to use something like position fixed or
 * absolute to place it over your app.
 * @type {m.Component<import('../attributes.mjs').MbStandardAttributes>}
 */
export const NotificationManager: m.Component<import("../attributes.mjs").MbStandardAttributes>;
export type NotificationAttributes = {
    color?: import("../attributes.mjs").Color;
    closeButton?: boolean;
    text: string;
    notificationIndex: number;
};
export type NotificationDefinition = {
    color?: import("../attributes.mjs").Color;
    text: string;
    expiresInMs?: number;
    class?: string;
};
export type TickCounter = {
    tick: number;
};
import m from 'mithril';
