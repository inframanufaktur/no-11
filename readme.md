# Inframanufaktur No. 11

---

🚧 This is work in progress.

---

This is a starter repo for websites using 11ty. It is configured to use Vue, Open Props, PostCSS, and an API Service (we use Strapi, but feel free to bake in your own headless CMS, or use only local data).

You can fork this repo to build new websites. Use it as an upstream repo to get all the new and – hopefully – shiny stuff. Or use the _Use this template_ button in the repository menu. You won’t be able to merge upstream updates if you use this option.

While this template includes some optimisations, it aims to be as adaptable as possible.

## Sponsoring

We’ve made No. 11 better thanks to the fine folks at [Ultra Tendency](https://www.ultratendency.com) and their commitment to Open.

!["Ultra Tendency – pioneering the future"](.github/img/sponsor-ut.jpg)

## Built with No. 11

The following projects utilize our starter:

- [ultratendency.com](https://www.ultratendecy.com)
- [ovl.design](https://www.ovl.design)

## 11ty

### Serve

To serve the site run `npm run serve`. This will start a server at `http://localhost:7777`. 11ty handles live reloading for you.

As we compile assets as part of the 11ty pipeline, the site will reload if you update the CSS or JS, or add new static assets.

### Automatic module recognition

We went a bit overboard, because going overboard is fun. No. 11 automatically recognises if you add new files to the `_functions_`, `_shortcodes`, and `_transforms` folders.

The camel cased name of the file is the name of the function or shortcode.

### Plugins

Configure 11ty plugins in `./_plugins` and add them to the array. You can initiate the plugin with all necessary options and export it:

```js
module.exports = eleventyPlugin({ this: 'is fine ' })
```

Plugins are separated into two section: There are some that should always be added (e.g. Vue), and some for production optimisations.

These are the default plugins.

#### Base

- [@11ty/eleventy-plugin-rss](https://www.11ty.dev/docs/plugins/rss/)
- [@11ty/eleventy-plugin-syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- [@11ty/eleventy-plugin-vue](https://github.com/11ty/eleventy-plugin-vue/)
- [Render Plugin](https://www.11ty.dev/docs/plugins/render/)

### Shortcodes

Similar to plugin, shortcodes live in `./_shortcodes`. All items in `index.js` will be added to 11ty.

💁 Open improvement: Implement different types of shortcodes. Currently `.addShortcode` is used for all functions.

### Transforms

Same game for transforms. Like the plugins, those are split into necessary transforms and optimisations for production builds.

### Rendering

You can use Vue components thanks to `@11ty/eleventy-plugin-vue` to render parts of the page. The plugin does not support Vue Layouts currently, they are still written in Nunjucks.

## Markdown

While 11ty ships with `markdown-it` we overwrite the default library to use an extended version. Installed plugins are:

- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-attribution](https://github.com/dweidner/markdown-it-attribution)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism)

The library is exported as an ES module, so that you can use it Vue components, as well as Node builds.

## Assets

### CSS

This project is using PostCSS to bring next generation CSS into the present. Further, we have added some plugins to enable sass like syntax, like variables or mixins.

Add CSS files in `./_src/assets/css/`. 11ty detects all files ending in `.css` in this folder and creates entry points for them. This will make the contents of the parsed file available in the [global data cascade](https://www.11ty.dev/docs/data-global/).

💁 Compilation happens through `./_helper/compileCss.js`.

## Tooling

### Husky & lint-staged

We use Husky and lint-staged for a bunch of checks. You find the scripts in `./.husky`.

### Netlify

If you deploy your site using Netlify, you’ll be pleased to know that [`netlify-plugin-11ty`](https://github.com/zeroby0/netlify-plugin-11ty) is installed.

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
