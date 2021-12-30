const vue = require('./vue')
const render = require('./render')
const purge = require('./purge')

module.exports = { always: [vue, render], prod: [purge] }
