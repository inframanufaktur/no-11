import md from 'markdown-it'
import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'
import footnotes from 'markdown-it-footnote'
import abbr from 'markdown-it-abbr'
import attribution from 'markdown-it-attribution'
import container from 'markdown-it-container'

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

markdown.renderer.rules.footnote_block_open = () =>
  '<section class="footnotes">\n' +
  '<h2 class="small-headline">Footnotes</h2>\n' +
  '<ol class="footnotes-list">\n'

export default markdown

export const mdItPackages = [
  'markdown-it',
  'markdown-it-anchor',
  'markdown-it-prism',
  'markdown-it-footnote',
  'markdown-it-abbr',
  'markdown-it-attribution',
  'markdown-it-container',
]
