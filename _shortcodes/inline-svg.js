const fs = require('fs')
const path = require('path')

module.exports = {
  name: 'inlineSvg',
  shortcodeFunction: function (filePath) {
    const file = fs.readFileSync(
      path.resolve(process.cwd(), '_src', filePath),
      {
        encoding: 'utf-8',
      },
    )

    return file.toString()
  },
}
