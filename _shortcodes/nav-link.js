const BASE_LINK_CLASSES = 'nav__link'

module.exports = {
  name: 'navLink',
  shortcodeFunction: function (menuItem, extraClasses = '') {
    const { url } = this.page

    if (typeof extraClasses !== 'string') {
      throw new Error(
        `11ty shortcode navLink: \`extraClasses\` must be a string, got ${typeof extraClasses}`,
      )
    }

    let ariaCurrent = url === menuItem.url ? 'aria-current="page"' : ''
    let linkClasses = extraClasses
      ? `${BASE_LINK_CLASSES} ${extraClasses.trim()}`
      : BASE_LINK_CLASSES

    if (url.includes(menuItem.url) && !menuItem.exact) {
      linkClasses += ' -is-active'
    }

    if (url === menuItem.url && menuItem.exact) {
      linkClasses += ' -is-active'
    }

    return `<a href="${menuItem.url}" class="${linkClasses}" ${ariaCurrent}>${menuItem.title}</a>`
  },
}
