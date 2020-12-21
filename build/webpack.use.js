const path = require('path')
const config = require('./config')
const Components = require('../use.json')

module.exports = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'use/[name].js',
    chunkFilename: 'use/[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: config.resolve,
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: config.loader
  },
  plugins: config.plugins
}
