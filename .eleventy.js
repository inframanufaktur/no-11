// const ErrorOverlay = require('eleventy-plugin-error-overlay')

const STATIC_FOLDERS = require('./_helper/paths')

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(ErrorOverlay)

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
