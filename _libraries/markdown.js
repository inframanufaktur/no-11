const md = require('markdown-it')
const anchor = require('markdown-it-anchor')
const prism = require('markdown-it-prism')
const footnotes = require('markdown-it-footnote')
const abbr = require('markdown-it-abbr')
const attribution = require('markdown-it-attribution')
const container = require('markdown-it-container')
const attrs = require('markdown-it-attrs')
const implicitFigures = require('markdown-it-image-figures')

const markdown = md({
  html: true,
  breaks: true,
  linkify: true,
})

markdown.use(anchor)
markdown.use(container, 'featured')
markdown.use(prism)
markdown.use(footnotes)
markdown.use(abbr)
markdown.use(attribution, {
  marker: '--',
  removeMarker: true,
})
markdown.use(attrs)
markdown.use(implicitFigures, {
  figcaption: true,
  lazy: true,
  async: true,
})

markdown.renderer.rules.footnote_block_open = () =>
  '<section class="footnotes">\n' +
  '<h2 class="small-headline">Footnotes</h2>\n' +
  '<ol class="footnotes-list">\n'

exports.mdItPackages = [
  'markdown-it',
  'markdown-it-anchor',
  'markdown-it-prism',
  'markdown-it-footnote',
  'markdown-it-abbr',
  'markdown-it-attribution',
  'markdown-it-container',
]

module.exports = markdown
