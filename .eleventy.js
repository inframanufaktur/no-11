const path = require('path')
const del = require('del')

const STATIC_FOLDERS = require('./_helper/paths')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('./_plugins'))

  eleventyConfig.addPlugin(require('./_shortcodes'))

  eleventyConfig.addPlugin(require('./_functions'))

  eleventyConfig.addPlugin(require('./_libraries'))

  eleventyConfig.addPlugin(require('./_transforms'))

  eleventyConfig.on('eleventy.before', async function () {
    const dist = path.join(process.cwd(), 'dist')

    const deletedDirectoryPaths = await del([`${dist}/**`, `!${dist}/img`])

    if (deletedDirectoryPaths.length) {
      console.log('eleventy.before: 🗑 Deleted `dist`.')
    }
  })

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')

  eleventyConfig.addWatchTarget(`./${STATIC_FOLDERS.static}**/*`)
  eleventyConfig.addWatchTarget('./_helper/**/*')

  // copy static assets to dist folder
  eleventyConfig.addPassthroughCopy({ [`./${STATIC_FOLDERS.img}`]: '/img/' })
  eleventyConfig.addPassthroughCopy({
    [`./${STATIC_FOLDERS.files}`]: '/files/',
  })

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
