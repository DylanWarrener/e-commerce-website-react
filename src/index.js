// React 
import React from 'react';
import ReactDOM from 'react-dom';

// React router 
import { BrowserRouter } from 'react-router-dom';

// Main app
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Style sheets
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);