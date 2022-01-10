const path = require('path')
const eleventyVue = require('@11ty/eleventy-plugin-vue')
const alias = require('@rollup/plugin-alias')

const external = [
  'markdown-it',
  'markdown-it-anchor',
  'markdown-it-prism',
  'markdown-it-footnote',
  'markdown-it-abbr',
  'markdown-it-attribution',
  'markdown-it-container',
]

const plugins = [
  alias({
    entries: [
      {
        find: '~cwd',
        replacement: path.resolve(process.cwd()),
      },
      {
        find: '~components',
        replacement: path.join(process.cwd(), '_src/_includes/components'),
      },
    ],
  }),
]

const pluginOptions = {
  external,
  plugins,
}

module.exports = eleventyVue(pluginOptions)
