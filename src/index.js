import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'bulma/css/bulma.css'

import App from './components/app.jsx'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('app'))
