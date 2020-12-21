const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin.js').default
var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var useList = fs.readdirSync(path.resolve(__dirname, '../src/use'))
var externals = {}

function resolve(moduleName) {
  return require.resolve(moduleName);
}

Object.keys(Components).forEach(function (key) {
  externals[`u-admin-component/src/${key}`] = `u-admin-component/lib/${key}`
})

useList.forEach(function (file) {
  file = path.basename(file, '.js')
  externals[`u-admin-component/src/use/${file}`] = `u-admin-component/lib/use/${file}`
})

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

externals[`u-admin-component/src/config`] = `u-admin-component/lib/config`

externals = [Object.assign({
  vue: exports.vue 
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  'u-admin-component': path.resolve(__dirname, '../'),
  use: path.resolve(__dirname, '../src/use')
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/

exports.loader = [
  {
    test: /\.(jsx?|babel|es6)$/,
    include: process.cwd(),
    exclude: exports.jsexclude,
    loader: 'babel-loader'
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      compilerOptions: {
        preserveWhitespace: false
      }
    }
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          url: true,
          import: true
        }
      },
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true
        }
      }
    ]
  },
  {
    test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: path.posix.join('static', '[name].[hash:7].[ext]')
    }
  }
]

exports.plugins = [
  new ProgressBarPlugin(),
  new VueLoaderPlugin()
]
exports.resolve = {
  extensions: ['.js', '.vue', '.json'],
  alias: exports.alias,
  modules: ['node_modules']
}