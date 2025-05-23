import z from 'zod';
import * as c from '../classes/index.js';

/**
 *
 * @param {z.infer<typeof c.margin>} a
 */
const marginMap = (a) => {
  const result = [];
  const margin = a.margin;
  if (!margin) return null;
  if (margin.all) result.push(`m-${margin.all}`);
  if (margin.bottom) result.push(`mb-${margin.bottom}`);
  if (margin.left) result.push(`ml-${margin.left}`);
  if (margin.right) result.push(`mr-${margin.right}`);
  if (margin.top) result.push(`mt-${margin.top}`);
  if (margin.x) result.push(`mx-${margin.x}`);
  if (margin.y) result.push(`my-${margin.x}`);
  if (result.length === 0) return null;
  return result.join(' ');
};

/**
 *
 * @param {z.infer<typeof c.padding>} a
 */
const paddingMap = (a) => {
  const result = [];
  const padding = a.padding;
  if (!padding) return null;
  if (padding.all) result.push(`p-${padding.all}`);
  if (padding.bottom) result.push(`pb-${padding.bottom}`);
  if (padding.left) result.push(`pl-${padding.left}`);
  if (padding.right) result.push(`pr-${padding.right}`);
  if (padding.top) result.push(`pt-${padding.top}`);
  if (padding.x) result.push(`px-${padding.x}`);
  if (padding.y) result.push(`py-${padding.x}`);
  if (result.length === 0) return null;
  return result.join(' ');
};

/**
 *
 * @param {z.infer<typeof c.color>} a
 */
const colorMap = (a) => {
  const color = a.color;
  if (!color) return null;
  return `is-${color}`;
};

/**
 *
 * @param {z.infer<typeof c.colorText>} a
 */
const colorTextMap = (a) => {
  const colorText = a.colorText;
  if (!colorText) return null;
  return `has-text-${colorText}`;
};

/**
 *
 * @param {z.infer<typeof c.colorBackground>} a
 */
const colorBackgroundMap = (a) => {
  const colorBackground = a.colorBackground;
  if (!colorBackground) return null;
  return `has-background-${colorBackground}`;
};

/**
 *
 * @param {z.infer<typeof c.width>} a
 */
const widthMap = (a) => {
  const width = a.width;
  if (!width) return null;
  return `is-${width}`;
};

/**
 *
 * @param {z.infer<typeof c.flex>} a
 */
const flexMap = (a) => {
  const flex = a.flex;
  if (!flex) return null;
  const result = [];
  if (flex.inline) result.push(flex.inline ? 'is-flex' : 'is-inline-flex');
  if (flex.direction) result.push(`is-flex-direction-${flex.direction}`);
  if (flex.wrap) result.push(`is-flex-wrap-${flex.wrap}`);
  if (flex.justify) result.push(`is-justify-content-${flex.justify}`);
  if (flex.alignContent) result.push(`is-align-content-${flex.alignContent}`);
  if (flex.alignItems) result.push(`is-align-items-${flex.alignItems}`);
  if (flex.alignSelf) result.push(`is-align-self-${flex.alignSelf}`);
  if (flex.grow !== undefined) result.push(`is-flex-grow-${flex.grow}`);
  if (flex.shrink !== undefined) result.push(`is-flex-shrink-${flex.grow}`);
  if (result.length === 0) return null;
  else return result.join(' ');
};

const displayMap = (a) => {
  const display = a.display;
  if (!display) return null;
  return `is-${display}`;
};

const visibilityMap = (a) => {
  const visibility = a.visibility;
  if (!visibility) return null;
  return `is-${visibility}`;
};

const floatMap = (a) => {
  const float = a.float;
  if (!float) return null;
  return `is-pulled-${float}`;
};

const overflowMap = (a) => {
  const overflow = a.overflow;
  if (!overflow) return null;
  return `is-clipped`;
};

const responsiveMap = (a) => {
  const responsive = a.responsive;
  if (!responsive) return null;
  return `is-${responsive}`;
};

const alignMap = (a) => {
  const align = a.align;
  if (!align) return null;
  return `has-text-${align}`;
};

const clickableMap = (a) => {
  const clickable = a.clickable;
  if (!clickable) return null;
  return `is-clickable`;
};

const noShadowMap = (a) => {
  const noShadow = a.noShadow;
  if (!noShadow) return null;
  return `is-shadowless`;
};
const noRadiusMap = (a) => {
  const noRadius = a.noRadius;
  if (!noRadius) return null;
  return `is-radiusless`;
};
const unselectableMap = (a) => {
  const unselectable = a.unselectable;
  if (!unselectable) return null;
  return `is-unselectable`;
};

const relativeMap = (a) => {
  const relative = a.relative;
  if (!relative) return null;
  return `is-relative`;
};

const classDirectiveMap = (a) => {
  const cl = a.classDirectives;
  if (!cl) return null;
  if (Array.isArray(cl)) return cl.filter(Boolean).join(' ').trim();
  else return cl.trim();
};

const sizeMap = (a) => {
  const size = a.size;
  if (!size) return null;
  return `is-${size}`;
};

const sizeGroupMap = (a) => {
  const size = a.size;
  if (!size) return null;
  return `are-${size}`;
};

/**
 * Take a large collection of already validated attributes, then correctly map them to
 * bulma classes
 * @param {object} o
 * @param {...string} manual Additional class strings to add
 * @returns {string}
 */
export function transformClasses(o, ...manual) {
  return [
    ...manual,
    alignMap(o),
    classDirectiveMap(o),
    clickableMap(o),
    colorBackgroundMap(o),
    colorMap(o),
    colorTextMap(o),
    displayMap(o),
    flexMap(o),
    floatMap(o),
    marginMap(o),
    noRadiusMap(o),
    noShadowMap(o),
    overflowMap(o),
    paddingMap(o),
    relativeMap(o),
    responsiveMap(o),
    sizeGroupMap(o),
    sizeMap(o),
    unselectableMap(o),
    visibilityMap(o),
    widthMap(o)
  ]
    .filter(Boolean)
    .sort()
    .join(' ');
}
