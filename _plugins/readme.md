# Plugins

To avoid cluttering the .eleventy file, we have outsourced the plugins into this folder.

Every 11ty plugin should live in its own file and be imported in `./index.js`.

Plugins that should run always are right in the `always` array. Plugins that optimise the production build (like `eleventy-plugin-purgecss`) shall reside in `prod`.
