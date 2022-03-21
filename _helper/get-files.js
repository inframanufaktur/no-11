const fs = require('fs')

module.exports = function getFilesOfType(dir, fileType = '.js') {
  const files = fs.readdirSync(dir)

  return files.filter((fileName) => fileName.endsWith(fileType))
}
