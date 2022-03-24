require('dotenv').config()

const sitemap = require('@quasibit/eleventy-plugin-sitemap')

module.exports = {
  plugin: sitemap,
  pluginOptions: {
    sitemap: {
      hostname: process.env.BASE_URL,
    },
  },
}
