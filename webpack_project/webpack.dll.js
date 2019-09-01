const path = require('path');
const webpack = require('webpack');

module.exports = {
    // context: process.cwd(),
    // resolve: {
    //     extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    //     modules: [__dirname, 'node_modules']
    // },
    entry: {
        library: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name]_[chunkhash].dll.js',
        path: path.join(__dirname, 'build/library'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.join(__dirname, 'build/library/[name].json')
        })
    ]
};
