module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#fb7000',
          'link-color': '#fb7000',
          'border-radius-base': '3px'
        },
        javascriptEnabled: true
      }
    }
  },
}
