import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom';
import App from './App';

//process.env.NODE_ENV // development,production
const Router = process.env.NODE_ENV ==='production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Router>
    <App />
    </Router>
  ,
  document.getElementById('root')
);

