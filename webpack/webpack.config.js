const path = require('path')

const Config = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = Config
