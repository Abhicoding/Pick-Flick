import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers.js'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(rootReducer, applyMiddleware(logger, promiseMiddleware()))

export default store