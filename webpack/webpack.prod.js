const Config = require('./webpack.common.js')

const Prod = {
    resolve: {
        alias: {
          react: 'preact-compat',
          'react-dom': 'preact-compat'
        },
    }
}

module.exports = Object.assign({}, Config, Prod)