// React 
import React from 'react';
import ReactDOM from 'react-dom';

// React redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React router 
import { BrowserRouter } from 'react-router-dom';

// Main app
import App from './App';

// Style sheets
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);