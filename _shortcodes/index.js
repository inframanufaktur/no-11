const getFolderExports = require('../_helper/get-folder-exports')

module.exports = function (eleventyConfig) {
  const shortcodes = getFolderExports(__dirname)

  shortcodes.forEach(({ name, func }) => {
    console.log(name, func)
    eleventyConfig.addShortcode(name, func)
  })
}
