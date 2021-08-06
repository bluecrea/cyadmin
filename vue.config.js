const { getThemeVariables } = require('ant-design-vue/dist/theme')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        /*modifyVars: getThemeVariables({
          dark: true
        }),*/
        modifyVars: {
          'primary-color': '#fb7000',
          'link-color': '#fb7000',
          'border-radius-base': '3px'
        },
        javascriptEnabled: true,
      }
    }
  },/*
  devServer: {
    port: 8080
  }*/
}