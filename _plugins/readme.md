# Plugins

To avoid cluttering the `.eleventy.js` file, we have outsourced the plugins into this folder.

Every 11ty plugin should live in its own file. All JS files in this files will get auto detected and added to the 11ty app.

For this feature to work, your exports should have the following structure:

```js
const myPlugin = require('@inframanufaktur/11ty-plugin')

module.exports = {
  plugin: myPlugin,
  pluginOptions: {
    cssIsAProgrammingLanguage: true,
  },
}
```

`pluginOptions` options is optional. If none is set (or the plugin does not support options), we’ll default to an empty object.
