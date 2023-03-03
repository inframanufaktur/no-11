const path = require('path')
const { camelCase } = require('lodash')
const getFiles = require('../_helper/get-files')

const { ELEVENTY_ENV } = process.env
const IS_PROD = ELEVENTY_ENV === 'production'

module.exports = function (eleventyConfig) {
  getFiles(__dirname)
    .filter((fileName) => fileName !== 'index.js')
    .forEach((fileName) => {
      const { when, transform } = require(path.join(__dirname, fileName))
      const name = camelCase(fileName.replace('.js', ''))

      if (when === 'prod' && IS_PROD) {
        eleventyConfig.addTransform(name, transform)

        return
      }

      eleventyConfig.addTransform(name, transform)
    })
}
