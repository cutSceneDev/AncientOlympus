import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import uiReducer from './store/reducers/interface'
import loginReducer from './store/reducers/login'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'

axios.defaults.baseURL = 'https://ancient-olympus.firebaseio.com/'

const rootReducer = combineReducers({
  interface: uiReducer,
  login: loginReducer
})
const store = createStore(rootReducer)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
