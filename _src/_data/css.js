const path = require('path')

const { compileCss } = require(path.join(
  process.cwd(),
  '_helper/compileCss.js',
))

const partials = {
  // code: 'code.css',
  customProperties: 'custom-properties.css',
  // footer: 'footer.css',
  // home: 'home.css',
  main: 'main.css',
  // text: 'text.css',
  // textDetail: 'text-detail.css',
}

module.exports = compileCss(partials)
