import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import App from './App';
import First from './First';

// process.env.NODE_ENV // development,production
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Router>
    <First></First>
    <App>
      <Switch></Switch>
    </App>
  </Router>
  ,
  document.getElementById('root')
);
