module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  }
  