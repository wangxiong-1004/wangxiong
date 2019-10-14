const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: []
}