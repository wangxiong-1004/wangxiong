const devMode = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': devMode ? 'error' : 'off',
    'no-debugger': devMode ? 'error' : 'off',
    'no-alert': devMode ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'dot-notation': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'semi': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
