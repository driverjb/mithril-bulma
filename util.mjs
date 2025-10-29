export const NBSP = '\u00A0';

/**
 *
 * @param {string} name
 */
function formatHypen(name) {
  return name
    .split('')
    .map((letter) => {
      let code = letter.charCodeAt(0);
      if (code >= 65 && code <= 90) return `-${letter.toLowerCase()}`;
      else return letter;
    })
    .join('');
}

/**
 * Apply the is-{something} pattern to boolean and string values. Use the function like this:
 * const arrayOfStrings = is({rounded, color})
 * ['is-rounded', 'is-primary']
 * @param {{[key: string]: number|boolean|string}} opt
 * @returns {string[]}
 */
export function is(opt = {}) {
  return Object.keys(opt).map((key) => {
    const value = opt[key];
    if (typeof value == 'boolean') return value ? `is-${formatHypen(key)}` : null;
    else return value ? `is-${value}` : null;
  });
}

/**
 * Apply the has-{something} pattern to boolean and string values. Use the function like this:
 * const arrayOfStrings = is({color, addons})
 * ['has-text-primary', 'has-addons']
 * @param {{[key: string]: number|boolean|string}} opt
 * @returns {string[]}
 */
export function has(opt = {}) {
  return Object.keys(opt).map((key) => {
    const value = opt[key];
    if (typeof value == 'boolean') return value ? `has-${formatHypen(key)}` : null;
    else {
      if (formatHypen(key).includes('color')) return value ? `has-text-${value}` : null;
      else return value ? `has-${value}` : null;
    }
  });
}

/**
 *
 * @param {import('./attributes.mjs').MbStandardAttributes} a
 * @returns {string[]}
 */
export function extractClasses(a) {
  const c = [];
  const props = [
    'clearFix',
    'clearRadius',
    'clearShadow',
    'clickable',
    'flex',
    'hideOverflow',
    'margin',
    'overlay',
    'padding',
    'positionRelative',
    'preventTextSelect',
    'pulled',
    'text',
    'visibility',
    'class'
  ];
  if (a.clearFix) c.push('is-clearfix');
  if (a.clearRadius) c.push('is-radiusless');
  if (a.clearShadow) c.push('is-shadowless');
  if (a.clickable) c.push('is-clickable');
  if (a.flex) {
    if (a.flex.alignContent) c.push(`is-align-content-${a.flex.alignContent}`);
    if (a.flex.alignItems) c.push(`is-align-items-${a.flex.alignItems}`);
    if (a.flex.alignSelf) c.push(`is-align-self-${a.flex.alignSelf}`);
    if (a.flex.direction) c.push(`is-flex-direction-${a.flex.direction}`);
    if (a.flex.grow) c.push(`is-flex-grow-${a.flex.grow}`);
    if (a.flex.shrink) c.push(`is-flex-shrink-${a.flex.shrink}`);
    if (a.flex.justifyContent) c.push(`is-justify-content-${a.flex.justifyContent}`);
    if (a.flex.wrap) c.push(`is-flex-wrap-${a.flex.wrap}`);
  }
  if (a.hideOverflow) c.push(`is-clipped`);
  if (a.margin) {
    if (Array.isArray(a.margin)) c.push(...a.margin.map((s) => `m${s.length == 1 ? `-${s}` : s}`));
    else c.push(`m${a.margin.length == 1 ? `-${a.margin}` : a.margin}`);
  }
  if (a.overlay) c.push('is-overlay');
  if (a.padding) {
    if (Array.isArray(a.padding))
      c.push(...a.padding.map((s) => `p${s.length == 1 ? `-${s}` : s}`));
    else c.push(`p${a.padding.length == 1 ? `-${a.padding}` : a.padding}`);
  }
  if (a.positionRelative) c.push('is-relative');
  if (a.preventTextSelect) c.push('is-unselectable');
  if (a.pulled) c.push(`is-pulled-${a.pulled}`);
  if (a.text) {
    if (a.text.alignment) {
      if (Array.isArray(a.text.alignment)) c.push(...a.text.alignment.map((t) => `has-text-${t}`));
      else c.push(`has-text-${a.text.alignment}`);
    }
    if (a.text.bgColor)
      c.push(`has-background-${a.text.bgColor}${a.text.bgColorInvert ? '-invert' : ''}`);
    if (a.text.case) c.push(`is-${a.text.case}`);
    if (a.text.color) c.push(`has-text-${a.text.color}${a.text.colorInvert ? '-invert' : ''}`);
    if (a.text.font) c.push(`is-family-${a.text.font}`);
    if (a.text.italic) c.push('is-italic');
    if (a.text.size) c.push(`is-size-${a.text.size}`);
    if (a.text.underlined) c.push('is-underlined');
    if (a.text.weight) c.push(`has-text-weight-${a.text.weight}`);
  }
  if (a.visibility) c.push(`is-${a.visibility}`);
  if (a.class) c.push(a.class);
  //clear the props because we've pulled them into a class array
  props.forEach((p) => delete a[p]);
  return c;
}

/**
 * Convert an array of strings and nulls into a class string for use with HTML
 * @param {(Array<string|null>|string|null)[]} arrClasses
 */
export function toClass(...arrClasses) {
  const classString = arrClasses
    .map((a) => {
      if (Array.isArray(a)) return a.filter(Boolean).join(' ').trim();
      else if (typeof a == 'string') return a.trim();
      else return '';
    })
    .join(' ')
    .trim();
  //const classString = arrClasses.filter(Boolean).join(' ').trim();
  return classString === '' ? null : classString;
}
