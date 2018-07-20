require('babel-register')({
    "plugins":["transform-es2015-modules-commonjs"] 
})

const express = require('express')
const fs = require('fs')
const path = require('path')

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router-dom')

const app = express()
const App = require('./src/components/app.jsx').default
const StaticRouter = ReactRouter.StaticRouter
const PORT = 9000

app.use(express.static(path.resolve(__dirname, './public')))

app.use((req, res)=> {
    let context = {}
    let htmlPath = path.resolve(__dirname, './public/index.html')
    let baseTemplate = fs.readFileSync(htmlPath)
    let body = ReactDOMServer.renderToString(React.createElement(
        StaticRouter, {location: req.url, context}, React.createElement(App)
    ))
    res.send(baseTemplate.toString().replace(`<div id='app'></div>`, 
`<div id='app'>${body}</div>`))
})

app.listen(PORT, () => console.log('Now playing'))