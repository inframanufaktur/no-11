module.exports = class {
  data() {
    return {
      pagination: { data: 'css', size: 1, alias: 'cssEntry' },
      eleventyExcludeFromCollections: true,
      layout: null,
      permalink: (data) => {
        return data.css[data.cssEntry].permalink
      },
    }
  }

  render(data) {
    return data.css[data.cssEntry].parsed
  }
}
