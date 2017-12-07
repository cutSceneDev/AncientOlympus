import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import uiReducer from './store/reducers/interface'
import loginReducer from './store/reducers/login'

import { BrowserRouter as Router } from 'react-router-dom'

import axios from 'axios'

import App from './App'

axios.defaults.baseURL = 'https://ancient-olympus.firebaseio.com/'

const rootReducer = combineReducers({
  interface: uiReducer,
  login: loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()