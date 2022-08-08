module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:vue/vue3-recommended",
  ],
  plugins: ['vue'],
  rules: {
    "vue/no-multiple-template-root": "off",
    quotes: [2, 'single'],
    curly: ['error', 'all'],
    eqeqeq: 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  }
}