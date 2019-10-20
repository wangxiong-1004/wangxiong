const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'wx-number': './src/index.js',
    'wx-number.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'wxNumber',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
}
