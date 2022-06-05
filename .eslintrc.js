module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:cypress/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
  },
  plugins: ['cypress', 'prettier'],
}
