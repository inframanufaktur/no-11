const plugins = require('./_plugins')

const STATIC_FOLDERS = require('./_helper/paths')

module.exports = function (eleventyConfig) {
  plugins.forEach((plugin) => {
    eleventyConfig.addPlugin(plugin.plugin, plugin.pluginOptions || {})
  })

  eleventyConfig.addFilter('debug', function (thing) {
    console.log(thing)
  })

  return {
    templateFormats: ['md', 'njk'],
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
