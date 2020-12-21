const path = require('path')
const config = require('./config')
const packageJson = require('../package.json')
console.log('config.externals')
console.log(config.externals)

module.exports = {
  mode: 'production',
  entry: {
    'u-admin-component.common': ['./src/index.js'],
    config: './src/config.js'
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'vue',
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
