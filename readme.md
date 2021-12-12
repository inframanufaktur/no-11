# Ultra Tendency 11ty Starter

---

🚧 This is work in progress.

---

This is a starter repo for websites using 11ty & Strapi.

You can fork this repo to build new pages. Use it as an upstream repo to get all the new and hopefully shiny stuff.

## 11ty

### Serve

To serve the site run `npm run serve`. This will start a server at `http://localhost:7777`. 11ty handles live reloading for you.

As we compile assets as part of the 11ty pipeline, the site will reload if you update the CSS or JS, or add new static assets.

### Plugins

Configure 11ty plugins in `./_plugins` and add them to the array. A plugin export should have the following format:

```js
module.exports = {
  plugin: pluginFunction,
  pluginOptions: <Object>
}
```

💁 `pluginOptions` will default to an empty object when calling `eleventyConfig.addPlugin`.

### Rendering

You can use Vue components thanks to `@11ty/eleventy-plugin-vue` to render parts of the page. The plugin does not support Vue Layouts currently, they are still written in Nunjucks.

## Assets

### CSS

This project is using PostCSS to bring next generation CSS into the present.

Add CSS files in `./_src/assets/css/`. Afterwards you can add the entry point in `./_src/data/css.js`. This will make the contents of the parsed file available in the [global data cascade](https://www.11ty.dev/docs/data-global/).

💁 Compilation happens through `./_helper/compileCss.js`

⚠️ Current build only supports inline styles

## Contributing

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages have to adhere to the specified format.

## Features of the feature

- [ ] Design Tokens
- [ ] Parse CSS files into actual files, current build only supports inline styles
