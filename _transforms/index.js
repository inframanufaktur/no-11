const resolveMediaUrls = require('./resolve-media-urls')
const imageTransform = require('./image-transform')
const htmlMinify = require('./html-minify')

module.exports = {
  base: [imageTransform],
  dev: [resolveMediaUrls],
  prod: [htmlMinify],
}
