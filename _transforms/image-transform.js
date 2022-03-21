const Image = require('@11ty/eleventy-img')
const { parseHTML } = require('linkedom')

const getFullSource = require('../_helper/get-full-source')

const defaultOptions = {
  widths: [140, 320, null],
  sizes: '25%',
  formats: ['avif', 'webp', 'jpeg'],
  urlPath: '/img/',
  outputDir: './dist/img/',
}

const IS_PROD = process.env.ELVENTY_ENV === 'production'

module.exports = {
  transform: async function (content) {
    // Basic implementation is based on this Gist: https://gist.github.com/Alexs7zzh/d92ae991ad05ed585d072074ea527b5c
    // We removed the `forEach` to leverage the core `Image` functionality.
    // async transforms work, even though the docs don’t tell you about it.
    if (this.outputPath && this.outputPath.endsWith('.html')) {
      let { document } = parseHTML(content)

      // data attr for opt in images
      // and everything inside a markdown block
      const images = [
        ...document.querySelectorAll('[data-process-image]'),
        ...document.querySelectorAll('.md-content img'),
      ]

      for (const img of images) {
        const src = img.getAttribute('src')
        const { imageSizes: sizes, imageWidths, imageFormats } = img.dataset

        // data-image-widths should be something along the lines of `data-image-widths="[300, 600, 900]"`
        const widths = imageWidths && JSON.parse(imageWidths)
        // `data-image-formats` should be specified in the same format
        // e.g. `data-image-formats="[avif, webp, png]"`
        const formats = imageFormats && JSON.parse(imageFormats)

        const options = {
          ...defaultOptions,
          ...(sizes && { sizes }),
          ...(widths && { widths }),
          ...(formats && { formats }),
        }

        const meta = await Image(getFullSource(src), options)
        const origType = options.formats.includes('png') ? 'png' : 'jpeg'

        const last = meta[origType][meta[origType].length - 1]

        img.setAttribute('width', last.width)
        img.setAttribute('height', last.height)
        img.setAttribute('src', meta[origType][0].url)
        img.setAttribute('decoding', 'async')
        img.setAttribute('loading', 'lazy')

        if (IS_PROD) {
          // they have done their job, we let them rest
          img.removeAttribute('data-image-widths')
          img.removeAttribute('data-image-sizes')
          img.removeAttribute('data-image-formats')
          img.removeAttribute('data-process-image')
        }

        img.outerHTML = `
          <picture>
            ${options.formats
              .map((format) => {
                return `<source type="image/${format}" sizes="${
                  options.sizes
                }" srcset="${meta[format].map((p) => p.srcset).join(', ')}">`
              })
              .join('\n')}
            ${img.outerHTML}
          </picture>`
      }

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }
    return content
  },
}
