const path = require('path')
const fs = require('fs')
const { camelCase } = require('lodash')

module.exports = function getFolderExports(folder) {
  const functions = []

  fs.readdirSync(folder).forEach(function (fileName) {
    if (fileName.endsWith('.js') && fileName !== 'index.js') {
      const name = camelCase(fileName.replace('.js', ''))

      const func = require(path.join(folder, fileName))

      functions.push({ name, func })
    }
  })

  return functions
}
