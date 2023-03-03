const path = require('path')
const getFilesOfType = require('../_helper/get-files')

module.exports = function (eleventyConfig) {
  const plugins = getFilesOfType(__dirname)
    .filter((file) => file !== 'index.js')
    .map((file) => require(path.join(__dirname, file)))

  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })
}
