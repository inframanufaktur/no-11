const path = require('path')
const { camelCase } = require('lodash')

const getFiles = require('../_helper/get-files')

const transformFiles = getFiles(__dirname)

const transforms = {
  base: [],
  prod: [],
}

transformFiles
  .filter((fileName) => fileName !== 'index.js')
  .forEach((fileName) => {
    const { when, transform } = require(path.join(__dirname, fileName))
    const name = camelCase(fileName.replace('.js', ''))

    if (when === 'prod') {
      transforms.prod.push({ name, transform })

      return
    }

    transforms.base.push({ name, transform })
  })

module.exports = transforms
