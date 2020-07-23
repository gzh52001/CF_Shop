import React from 'react';

import {withUser} from '../../utils/hoc';

import './home.scss';
import mock from '../../api/mock.js'

class Home extends React.Component{
   async componentDidMount(){
       let a = await mock.pointsList();
       console.log(a)
    }
    render(){
        console.log('Home.props',this.props);
        return (
            <div className="Home">
                <h1>欢迎进入CF周边后台管理系统!</h1>
            </div>
        )
    }
}

Home = withUser(Home); // Home得到的是高阶组件中的OuterComponent

export default Home;