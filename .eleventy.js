const { ELEVENTY_ENV } = process.env

const plugins = require('./_plugins')

const STATIC_FOLDERS = require('./_helper/paths')

const IS_PROD = ELEVENTY_ENV === 'production'

module.exports = function (eleventyConfig) {
  plugins.always.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })

  if (IS_PROD) {
    plugins.prod.forEach((plugin) => {
      eleventyConfig.addPlugin(plugin.plugin, plugins.pluginOptions || {})
    })
  }

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')

  eleventyConfig.addFilter('debug', function (thing) {
    console.log(thing)
  })

  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.static}**/*`)
  eleventyConfig.addWatchTarget('./_helper/**/*')

  // copy static assets to dist folder
  config.addPassthroughCopy({ [`./${STATIC_FOLDERS.img}`]: '/img/' })
  config.addPassthroughCopy({ [`./${STATIC_FOLDERS.files}`]: '/files/' })

  return {
    templateFormats: ['md', '11ty.js', 'njk'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
    },
  }
}
