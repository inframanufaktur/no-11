# Inframanufaktur No. 11

---

🚧 This is work in progress.

---

This is a starter repo for websites using 11ty. It is configured to use Vue, Open Props, PostCSS, and an API Service (we use Strapi, but feel free to bake in your own.)

You can fork this repo to build new websites. Use it as an upstream repo to get all the new and hopefully shiny stuff. Or click on the Use this template button above. You won’t be able to merge upstream updates if you use this option.

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

### Shortcodes

Similar to plugin, shortcodes live in `./_shortcodes`. The array in `index.js` will be added to 11ty.

💁 Open improvement: Implement different types of shortcodes. Currently `.addShortcode` is used for all functions.

### Rendering

You can use Vue components thanks to `@11ty/eleventy-plugin-vue` to render parts of the page. The plugin does not support Vue Layouts currently, they are still written in Nunjucks.

## Assets

### CSS

This project is using PostCSS to bring next generation CSS into the present.

Add CSS files in `./_src/assets/css/`. Afterwards you can add the entry point in `./_src/data/css.js`. This will make the contents of the parsed file available in the [global data cascade](https://www.11ty.dev/docs/data-global/).

💁 Compilation happens through `./_helper/compileCss.js`

## Contributing

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages have to adhere to the specified format.

## Features of the feature

- [ ] JavaScript Build Process
- [ ] SEO optimisation
- [x] Design Tokens – using [Open Props](https://open-props.style/)
- [x] Parse CSS files into actual files, current build only supports inline styles

## 🌟 Inspiration

This starter contains ideas and concepts from around the around. Namely:

- [eleventastic](https://github.com/maxboeck/eleventastic) by Max Böck
- [Supermaya](https://github.com/MadeByMike/supermaya) by Mike Riethmueller

Thanks also to the developers of the 11ty plugins that made us write less code. 💞
