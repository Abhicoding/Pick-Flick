const path = require('path')

const Config = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  //   alias: {
  //     'react': 'preact-compat',
  //     'react-dom': 'preact-compat'
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
        'css-loader'
      ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = Config
