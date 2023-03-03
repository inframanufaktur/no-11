const { minify } = require('csso')
const IS_PROD = process.env.ELEVENTY_ENV === 'production'

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('css')
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compileOptions: {
      permalink: function (contents, inputPath) {
        const fileName = inputPath.split('/').pop()

        return () => {
          return `/css/${fileName}`
        }
      },
    },
    compile: async function (inputContent, inputPath) {
      const { compiler } = require('../_helper/postcss')

      const { css, messages } = await compiler.process(inputContent, {
        from: inputPath,
      })

      const dependencies = messages
        .filter((message) => message.type === 'dependency')
        .map((message) => message.file)

      if (dependencies.length) {
        this.addDependencies(inputPath, dependencies)
      }

      return () => {
        if (IS_PROD) {
          const cssoResult = minify(css)

          if (cssoResult.errors) {
            throw new Error(cssoResult.errors.join(', '))
          }

          return cssoResult.css
        }

        return css
      }
    },
  })
}
