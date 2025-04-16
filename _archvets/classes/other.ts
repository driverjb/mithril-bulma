import z from 'zod';

/** Use to remove all radius modifications from an element */
export const MbRadiuslessRaw = z.boolean().default(false);

/** Use to remove all radius modifications from an element */
export const MbRadiusless = MbRadiuslessRaw.transform((a) => (a ? 'is-radiusless' : ''));

/** Use to remove all shadows from an element */
export const MbShadowlessRaw = z.boolean().default(false);

/** Use to remove all shadows from an element */
export const MbShadowless = MbShadowlessRaw.transform((a) => (a ? 'is-shadowless' : ''));

/** Use to make content unselectable */
export const MbUnselectableRaw = z.boolean().default(false);

/** Use to make content unselectable */
export const MbUnselectable = MbUnselectableRaw.transform((a) => (a ? 'is-unselectable' : ''));

/** Use to force a pointer selector on an element */
export const MbClickableRaw = z.boolean().default(false);

/** Use to force a pointer selector on an element */
export const MbClickable = MbClickableRaw.transform((a) => (a ? 'is-clickable' : ''));

/** Use to set element positioning to relative */
export const MbRelativeRaw = z.boolean().default(false);

/** Use to set element positioning to relative */
export const MbRelative = MbRelativeRaw.transform((a) => (a ? 'is-relative' : ''));
