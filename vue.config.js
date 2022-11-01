const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/GreaterGoodsGrocers/",

  css: {
    sourceMap: process.env.NODE_ENV === "development",
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },

  configureWebpack: {
    devServer: {
      headers: {
        "Cache-Control":
          "must-revalidate, no-cache, no-store, no-transform, private, proxy-revalidate, max-age=5",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "X-Content-Type": "nosniff",
      },
    },
  },
});
