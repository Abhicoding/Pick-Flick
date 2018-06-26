const Config = require('./webpack.config')

const Dev = {
  mode: 'development',
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devtool: 'cheap-module-source-maps'
}

module.exports = Object.assign({}, Dev, Config)
