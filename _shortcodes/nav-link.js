const BASE_LINK_CLASSES = 'nav__link'

module.exports = {
  name: 'navLink',
  function: function (menuItem, page, extraClasses = '') {
    if (typeof extraClasses !== 'string') {
      throw new Error(
        `11ty shortcode navLink: \`extraClasses\` must be a string, got ${typeof extraClasses}`,
      )
    }

    let ariaCurrent = page.url === menuItem.url ? 'aria-current="page"' : ''
    let linkClasses = extraClasses
      ? `${BASE_LINK_CLASSES} ${extraClasses.trim()}`
      : BASE_LINK_CLASSES

    if (page.url.includes(menuItem.url) && !menuItem.exact) {
      linkClasses += ' -is-active'
    }

    if (page.url === menuItem.url && menuItem.exact) {
      linkClasses += ' -is-active'
    }

    return `<a href="${menuItem.url}" class="${linkClasses}" ${ariaCurrent}>${menuItem.title}</a>`
  },
}
