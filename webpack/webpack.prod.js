const Config = require('./webpack.config')

const Prod = {
    mode: 'production',
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}

module.exports = Object.assign({}, Config, Prod)