const path = require('path')
const fs = require('fs')
const { camelCase } = require('lodash')
const { compileCss } = require(path.join(
  process.cwd(),
  '_helper/compile-css.js',
))
const STATIC_FOLDERS = require(path.join(process.cwd(), '_helper/paths.js'))

const cssPath = path.join(process.cwd(), STATIC_FOLDERS.css)

const partials = {}

fs.readdirSync(cssPath)
  .filter((fileName) => fileName.endsWith('.css'))
  .forEach(function (fileName) {
    const property = camelCase(fileName.replace('.css', ''))

    Object.defineProperty(partials, property, {
      value: fileName,
      enumerable: true,
      writable: true,
      configurable: true,
    })
  })

module.exports = compileCss(partials)
