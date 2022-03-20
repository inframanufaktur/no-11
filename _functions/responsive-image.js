const Image = require('@11ty/eleventy-img')
const getFullSource = require('../_helper/get-full-source')

const defaultOptions = {
  widths: [140, 320, null],
  sizes: '25%',
  formats: ['avif', 'webp', 'jpeg'],
  urlPath: '/img/',
  outputDir: './dist/img/',
}

module.exports = async function (src, alt, sizes, imgAttrs = {}, options = {}) {
  const fullSrc = getFullSource(src)

  let metadata = await Image(fullSrc, {
    ...defaultOptions,
    ...options,
  })

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
    ...imgAttrs,
  }

  return Image.generateHTML(metadata, imageAttributes)
}
