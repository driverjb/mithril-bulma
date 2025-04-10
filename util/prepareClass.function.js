/**
 * Consumes an array of stuff and produces a string ready for use in the html class property
 * @param {unknown[]} classList
 */
export function joinClass(classList) {
  return classList
    .filter((c) => !!c)
    .join(' ')
    .trim();
}
