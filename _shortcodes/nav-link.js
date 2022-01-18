const BASE_LINK_CLASSES = 'nav__link'

module.exports = {
  name: 'navLink',
  shortcodeFunction: function (menuItem, extraClasses = '') {
    const { url } = this.page
    const { attributes = {}, classes = '' } = menuItem

    if (typeof extraClasses !== 'string') {
      throw new Error(
        `11ty shortcode navLink: \`extraClasses\` must be a string, got ${typeof extraClasses}`,
      )
    }

    let activeClass = ''

    // highlight menu item if sub page is visited
    // e.g. `/blog/blog-post` should highlight `/blog/`
    // check for exact here, as `/` would always be highlighted
    if (url.includes(menuItem.url) && !menuItem.exact) {
      activeClass = ' -is-active'
    }

    // highlight exact match, mostly for homepage or something pretty specific
    if (url === menuItem.url && menuItem.exact) {
      activeClass = ' -is-active'
    }

    let ariaCurrent = url === menuItem.url ? 'aria-current="page"' : ''
    let linkClasses = [BASE_LINK_CLASSES, classes, extraClasses, activeClass]
      .join(' ')
      .trim()

    let extraAttributes = Object.keys(attributes)
      .map((key) => `${key}="${attributes[key]}"`)
      .join(' ')

    return `<a href="${menuItem.url}" class="${linkClasses}" ${extraAttributes} ${ariaCurrent}>${menuItem.title}</a>`
  },
}
