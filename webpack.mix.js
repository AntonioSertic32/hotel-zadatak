let mix = require("laravel-mix");
require("laravel-mix-purgecss");

mix.setPublicPath("./public");

mix.sass("resources/assets/src/sass/main.sass", "public/assets/css");
mix.js("resources/assets/src/js/app.js", "public/assets/js/app.js");

mix.version();

// browsersync watch for files included below and proxy setup
mix.browserSync({
  files: ["resources/"],
  injectChanges: true,
  proxy: "http://localhost:8080",
  port: 3000,
});
