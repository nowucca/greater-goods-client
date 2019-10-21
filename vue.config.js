// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/GreaterGoodsGrocers'
      : '/GreaterGoodsGrocers',

  configureWebpack: {
    devServer: {
      headers: {
        'Cache-Control':
          'must-revalidate, no-cache, no-store, no-transform, prive, proxy-revalidate, max-age=5',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'X-Content-Type': 'nosniff'
      }
    }
  }
}
