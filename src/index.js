import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'bulma/css/bulma.css'

import App from './components/app.jsx'

hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>
, document.getElementById('app'))
