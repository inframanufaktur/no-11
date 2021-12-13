/*
 * Parse a string and get the value of a specific meta value
 *
 * @example <meta name="wheres-waldo" content="who-cares" /> => 'who-cares'
 *
 * @param {String} name Name of a meta tag
 * @param {String} input String content
 * @returns {String}
 */
module.exports = function findMetaValue(name, input) {
  let regEx = new RegExp(`${name} content="(.+?)"`, 'm')

  let [, result] = regEx.exec(input)

  return result
}
