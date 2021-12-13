const test = require('ava')

const findMetaValue = require('../findMetaValue')

test('returns the content value', (t) => {
  t.is(findMetaValue('name="13"', '<meta name="13" content="12" />'), '12')
})

test('returns the value if given a multi-line string', (t) => {
  const input = `
    <meta name="a" content="fa" />
    <meta name="13" content="12" />
  `

  t.is(findMetaValue('name="13"', input), '12')
})
