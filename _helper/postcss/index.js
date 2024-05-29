const path = require('path')
const postcss = require('postcss')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

let PLUGINS = [
  require('postcss-mixins')({
    mixinsDir: path.join(__dirname, 'mixins/'),
  }),
  require('postcss-import'),
  require('postcss-nested'),
  postcssJitProps(OpenProps),
  require('autoprefixer'),
]

let compiler = postcss(PLUGINS)

module.exports = {
  PLUGINS,
  compiler,
}
