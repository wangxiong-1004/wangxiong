module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['off', 'always'],
    'import/prefer-default-export': ['off', 'always']
  }
}
