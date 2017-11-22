import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyling from './hoc/GlobalStyling'

axios.defaults.baseURL = 'https://ancient-olympus.firebaseio.com/'

const app = (
  <GlobalStyling>   
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStyling>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
