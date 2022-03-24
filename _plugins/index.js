const path = require('path')
const getFilesOfType = require('../_helper/get-files')

module.exports = getFilesOfType(__dirname)
  .filter((file) => file !== 'index.js')
  .map((file) => require(path.join(__dirname, file)))
