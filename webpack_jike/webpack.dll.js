const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    library: ['react', 'react-dom']
  },

  output: {
    filename: '[name]_[hash].dll.js',
    path: path.resolve(__dirname, 'build/library'),
    library: '[name]'
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [ path.resolve(__dirname, './build') ]
    }),
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'build/library/[name].json')
    })
  ]
}
