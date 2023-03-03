module.exports = {
  tags: ['text'],
  eleventyComputed: {
    permalink: function (data) {
      const { inputPath } = data.page
      const rawPath = inputPath.split('/').pop().replace('.md', '')

      return `/${rawPath}/`
    },
  },
}
