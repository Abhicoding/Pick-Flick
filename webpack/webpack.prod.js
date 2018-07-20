const Config = require('./webpack.common.js')

const Prod = {
    mode: 'production'
}

module.exports = Object.assign({}, Config, Prod)