const imageTransform = require('./image-transform')
const htmlMinify = require('./html-minify')

module.exports = { base: [imageTransform], prod: [htmlMinify] }
