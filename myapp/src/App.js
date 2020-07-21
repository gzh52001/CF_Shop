import React from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import './App.css';
import {HomeOutlined,UserOutlined,AppstoreOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Home from './pages/Home/home';
import Sort from './pages/Sort/sort';
import Reg from './pages/Reg/reg';
import Login from './pages/Login/login';
import Cart from './pages/Cart/cart';
import Mine from './pages/Mine/mine';
import Details from './pages/Details/details';

function App(props) {
  // console.log('app.props=',props);
  
  const foot = [{
    text:'首页',
    path:'/home',
    icon:<HomeOutlined/>,
    component:Home
  },{
    text:'分类',
    path:'/sort',
    icon:<AppstoreOutlined />,
    component:Sort
  },{
    text:'购物车',
    path:'/cart',
    icon: <ShoppingCartOutlined/>,
    component:Cart
  },{
    text:'我的',
    path:'/mine',
    icon: <UserOutlined/>,
    component:Mine
  }];
  const goto = (path)=>{
    props.history.push(path)
  }
  return (
    <div className="App">

      <nav>
        <ul className="foot_ul">
        
          {
          foot.map(item=>(
            <li className="foot_li"  key={item.path}onClick={goto.bind(null,item.path)}>
             {item.icon}
             {item.text}
             </li>
          )) 
          }
        </ul>
      </nav>
      
      <Switch>
      {
        foot.map(item => <Route key={item.path} path={item.path} component={item.component} />)
        } 
        <Route path="/home" component={Home}/>
        <Route path="/sort" component={Sort}/>
        <Route path="/reg" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/details" component={Details}/>
        <Redirect from="/" to="/home" exact/>
      </Switch>
    </div>
  );
}
App = withRouter(App)
export default App;
