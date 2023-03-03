const getFolderExports = require('../_helper/get-folder-exports')

module.exports = function (eleventyConfig) {
  const libraries = getFolderExports(__dirname)

  libraries.forEach(({ name, func }) => {
    eleventyConfig.setLibrary(name, func)
  })
}
