const path = require('path')
const del = require('del')

const { ELEVENTY_ENV } = process.env

const functions = require('./_functions')
const plugins = require('./_plugins')
const shortcodes = require('./_shortcodes')
const libraries = require('./_libraries')
const transforms = require('./_transforms')

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

  shortcodes.forEach(({ name, func }) => {
    eleventyConfig.addShortcode(name, func)
  })

  functions.forEach(({ name, func }) => {
    eleventyConfig.addJavaScriptFunction(name, func)
  })

  libraries.forEach(({ name, library }) => {
    eleventyConfig.setLibrary(name, library)
  })

  transforms.base.forEach(({ name, transform }) => {
    eleventyConfig.addTransform(name, transform)
  })

  if (IS_PROD) {
    transforms.prod.forEach(({ name, transform }) => {
      eleventyConfig.addTransform(name, transform)
    })
  }

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
