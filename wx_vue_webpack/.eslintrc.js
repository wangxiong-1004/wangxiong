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
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'comma-dangle': [2, 'never'],
        'import/prefer-default-export': 'off',
        'dot-notation': 'off',
        'no-shadow': 'off',
        'global-require': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
