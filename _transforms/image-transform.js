const Image = require('@11ty/eleventy-img')
const { parseHTML } = require('linkedom')

const defaultOptions = {
  widths: [140, 320, null],
  sizes: '25%',
  formats: ['avif', 'webp', 'jpeg'],
  urlPath: '/img/',
  outputDir: './dist/img/',
}

/**
 * Check if the image starts with the remote upload path and set MEDIA_HOST if it does
 *
 * @param {String} orig
 * @returns
 */
const getFullSource = (orig) => {
  return orig.startsWith(process.env.MEDIA_ROOT_FOLDER)
    ? `${process.env.MEDIA_HOST}${orig}`
    : orig
}

module.exports = {
  name: 'responsiveImages',
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
        const { imageSizes: sizes, imageWidths } = img.dataset

        // data-image-widths should be something along the lines of `data-image-widths="[300, 600, 900]"`
        const widths = imageWidths && JSON.parse(imageWidths)

        const options = {
          ...defaultOptions,
          ...(sizes && { sizes }),
          ...(widths && { widths }),
        }

        const meta = await Image(getFullSource(src), options)

        const last = meta.jpeg[meta.jpeg.length - 1]

        img.setAttribute('width', last.width)
        img.setAttribute('height', last.height)
        img.setAttribute('src', meta.jpeg[0].url)
        img.setAttribute('decoding', 'async')
        img.setAttribute('loading', 'lazy')

        // they have done their job, we let them rest
        img.removeAttribute('data-image-widths')
        img.removeAttribute('data-image-sizes')
        img.removeAttribute('data-process-image')

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
