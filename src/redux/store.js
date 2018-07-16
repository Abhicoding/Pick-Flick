import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers.js'
import promiseMiddleware from 'redux-promise-middleware'

const composeEnhancers = typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const enhancer = composeEnhancers(applyMiddleware(logger, promiseMiddleware()))

const store = createStore(rootReducer, enhancer)

export default store