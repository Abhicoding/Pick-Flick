const Config = require('./webpack.config')
const path = require('path')

const Dev = {
  mode: 'development',
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devtool: 'cheap-module-source-maps',
  devServer: {
    port: 9000,
    compress: true,
    contentBase: path.join(__dirname, '../public/')
  },
  watch: true
}

console.log(path.join(__dirname, '../public/index.html'))

module.exports = Object.assign({}, Dev, Config)
