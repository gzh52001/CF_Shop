import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';


const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);

