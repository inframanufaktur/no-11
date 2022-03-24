const render = require('./render')
const rss = require('./rss')
const sitemap = require('./sitemap')
const syntaxHighlight = require('./syntax-highlight')
const vue = require('./vue')

module.exports = {
  always: [vue, render, rss, syntaxHighlight, sitemap],
  prod: [],
}
