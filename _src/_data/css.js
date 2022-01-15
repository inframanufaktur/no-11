const path = require('path')
const fs = require('fs')
const { camelCase } = require('lodash')
const { compileCss } = require(path.join(
  process.cwd(),
  '_helper/compileCss.js',
))
const STATIC_FOLDERS = require(path.join(process.cwd(), '_helper/paths.js'))

const cssPath = path.join(process.cwd(), STATIC_FOLDERS.css)

const partials = {}

fs.readdir(cssPath, function (err, files) {
  if (err) {
    throw new Error('Unable to scan directory: ' + err)
  }

  files.forEach(function (fileName) {
    if (fileName.endsWith('.css')) {
      const property = camelCase(fileName.replace('.css', ''))

      Object.defineProperty(partials, property, {
        value: fileName,
        enumerable: true,
      })
    }
  })
})

module.exports = compileCss(partials)
