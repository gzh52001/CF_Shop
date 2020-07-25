import React from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';


import Login from './pages/Login/Login';
import First from './First';


function App(props) {
  console.log('app.props=', props)

  const goto = (path) => {
    props.history.push(path);
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={First} />
        <Route exact={true} path='/login' component={Login} />
        <Redirect from='/' to='/login' exact />
      </Switch>
    </div>
  );
}
App = withRouter(App); // 传入App组件，返回一个新的组件
export default App;
