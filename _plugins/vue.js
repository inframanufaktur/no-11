const path = require('path')
const eleventyVue = require('@11ty/eleventy-plugin-vue')
const alias = require('@rollup/plugin-alias')

module.exports = {
  plugin: eleventyVue,
  pluginOptions: {
    rollupOptions: {
      plugins: [
        alias({
          entries: [
            {
              find: '~components',
              replacement: path.join(
                process.cwd(),
                '_src/_includes/components',
              ),
            },
          ],
        }),
      ],
    },
  },
}
