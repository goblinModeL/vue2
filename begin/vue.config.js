module.exports = {
  devServer: {
    port: 80,
    open: true,
    proxy: {
      '/api': {
        target: 'http://47.120.45.156:8465',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
