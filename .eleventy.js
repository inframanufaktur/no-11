const plugins = require('./_plugins')

const STATIC_FOLDERS = require('./_helper/paths')

module.exports = function (eleventyConfig) {
  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')

  eleventyConfig.addFilter('debug', function (thing) {
    console.log(thing)
  })

  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.static}**/*`)
  eleventyConfig.addWatchTarget('./_helper/**/*')

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
