module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#fb7000',
          'link-color': '#fb7000',
          'border-radius-base': '6px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    port: 8000
  }
}
