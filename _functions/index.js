const responsiveImage = require('./responsive-image')

module.exports = [responsiveImage]
const path = require('path')
const fs = require('fs')
const { camelCase } = require('lodash')

const functions = []

fs.readdirSync(__dirname).forEach(function (fileName) {
  if (fileName.endsWith('.js') && fileName !== 'index.js') {
    const name = camelCase(fileName.replace('.js', ''))

    functions.push({ name, func: require(path.join(__dirname, fileName)) })
  }
})

module.exports = functions
