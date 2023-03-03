const getFiles = require('../_helper/get-files')

module.exports = function (eleventyConfig) {
  getFiles(__dirname)
    .filter((fileName) => fileName !== 'index.js')
    .forEach((templateFile) => {
      eleventyConfig.addPlugin(require(`./${templateFile}`))
    })
}
