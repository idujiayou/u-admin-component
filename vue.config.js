const path = require("path");

module.exports = {
  devServer: {
    watchOptions: {
      ignored: ['node_modules'],
      aggregateTimeout: 300,
      poll: 1500
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/style/var.less")//需要自行添加
      ]
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('u-admin-component', path.resolve(__dirname, './'))
  }
}
