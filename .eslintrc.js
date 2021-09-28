module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
  ],
  plugins: ['vue'],
  rules: {
    "vue/no-multiple-template-root": "off"
  }
}