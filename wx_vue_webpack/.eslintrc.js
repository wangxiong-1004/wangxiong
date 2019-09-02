const devMode = process.env.NODE_ENV === 'production';

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
        'no-alert': devMode ? 'error': 'off',
        'indent': ['error', 4],
        'comma-dangle': [2, 'never'],
        'import/prefer-default-export': 'off',
        'dot-notation': 'off',
        'no-shadow': 'off',
        'global-require': 'off',
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
