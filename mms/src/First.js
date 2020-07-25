import React,{useEffect} from 'react';
import { Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import { withUser } from './utils/hoc';

import Home from './pages/Home/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Plus from './pages/Plus';


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

  const ben = (path) => {
    localStorage.removeItem('user')
  }
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (!user) {
      props.history.push('/login')
    } else {
      props.history.push('/home')
    }
  }, [])
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
        <Link to="/login" className="btn" onClick={ben}>退出</Link>
      </nav>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/plus' component={Plus} />
        <Route path='/order' component={Order} />
      </Switch>
    </div>
  );
}
App = withRouter(App); // 传入App组件，返回一个新的组件
App = withUser(App)
export default App;
