const getFolderExports = require('../_helper/get-folder-exports')

module.exports = function (eleventyConfig) {
  const functions = getFolderExports(__dirname)

  functions.forEach(({ name, func }) => {
    eleventyConfig.addJavaScriptFunction(name, func)
  })
}
