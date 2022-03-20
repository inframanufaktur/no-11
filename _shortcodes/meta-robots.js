module.exports = function () {
  if (process.env.PAGE_STATE !== 'production') {
    return '<meta name="robots" content="noindex,nofollow" />'
  }
}
