module.exports = class {
  data() {
    return {
      pagination: { data: 'css', size: 1 },
      permalink: (data) => data.css[data.pagination.items[0]].permalink,
    }
  }

  render(data) {
    return data.css[data.pagination.items[0]].parsed
  }
}
