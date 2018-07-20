const Config = require('./webpack.config')

const Prod = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },   
    },
    resolve: {
        alias: {
          'react': 'preact-compat',
          'react-dom': 'preact-compat'
        },
    }
}

module.exports = Object.assign({}, Config, Prod)