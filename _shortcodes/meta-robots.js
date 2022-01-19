module.exports = {
  name: 'metaRobots',
  shortcodeFunction: function () {
    if (process.env.PAGE_STATE !== 'production') {
      return '<meta name="robots" content="noindex,nofollow" />'
    }
  },
}
