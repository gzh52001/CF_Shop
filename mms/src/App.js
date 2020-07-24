import React from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import { withUser } from './utils/hoc';

import Home from './pages/Home/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Plus from './pages/Plus';
import { Button } from 'antd';


function App(props) {
  console.log('app.props=', props)
  const menu = [{
    text: '首页',
    path: '/home'
  }, {
    text: '会员管理',
    path: '/plus'
  }, {
    text: '商品管理',
    path: '/cart'
  }, {
    text: '订单管理',
    path: '/order'
  }];

  const goto = (path) => {
    props.history.push(path);
  }
  return (
    <div className="App">
      <nav className="nav">
        <img src="https://js01.daoju.qq.com/zb/cf/images/logo-cf-up.png" />
        <ul>
          {
            menu.map(item => (
              <li className="list" key={item.path} onClick={goto.bind(null, item.path)}>
                {item.text}
              </li>
            ))
          }
        </ul>
        <Button>退出</Button>
      </nav>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cart' component={Cart} />
        <Route path='/plus' component={Plus} />
        <Route path='/order' component={Order} />
        <Route path='/notfound' component={() => <div>notfound</div>} />
        <Redirect from='/' to='/login' exact />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}
App = withRouter(App); // 传入App组件，返回一个新的组件
App = withUser(App)
export default App;
