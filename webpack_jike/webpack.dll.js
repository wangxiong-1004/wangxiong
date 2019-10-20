const path = require('path')
const webpack = require('webpack')

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
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'build/library/[name].json')
    })
  ]
}
