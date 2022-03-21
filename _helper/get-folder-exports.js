const path = require('path')
const { camelCase } = require('lodash')
const getFilesOfType = require('./get-files')

module.exports = function getFolderExports(folder) {
  const functions = []
  const files = getFilesOfType(folder)

  files.forEach(function (fileName) {
    if (fileName !== 'index.js') {
      const name = camelCase(fileName.replace('.js', ''))

      const func = require(path.join(folder, fileName))

      functions.push({ name, func })
    }
  })

  return functions
}
