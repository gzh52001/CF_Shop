import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'
import App from './App';

// process.env.NODE_ENV // development,production
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Router>
    <React.StrictMode>
    </React.StrictMode>
    <App>
    </App>
  </Router>
  ,
  document.getElementById('root')
);
