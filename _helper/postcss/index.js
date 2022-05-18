const path = require('path')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

const STATIC_FOLDERS = require('../paths')
const propertiesPath = path.join(
  process.cwd(),
  STATIC_FOLDERS.css,
  'custom-properties.css',
)

let PLUGINS = [
  require('postcss-mixins')({
    mixinsDir: path.join(__dirname, 'mixins/'),
  }),
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-custom-properties')({ preserve: true }),
  postcssCustomProperties({ importFrom: propertiesPath }),
  postcssJitProps(OpenProps),
  require('autoprefixer'),
]

let compiler = postcss(PLUGINS)

module.exports = {
  PLUGINS,
  compiler,
}
