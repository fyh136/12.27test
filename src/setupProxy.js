const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(proxy('/api',
    {
      target: "http://134.175.115.202",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    }))
}