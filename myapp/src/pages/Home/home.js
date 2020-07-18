import React from 'react';
import './home.scss';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import {ShopTwoTone,AppstoreTwoTone,BulbTwoTone,ShoppingTwoTone} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Nav from './nav'


class Home extends React.Component{
    goto = (path)=>{
        this.props.history.push(path);
    }
    render(){

        // const {current} = this.state;
        return(
            <div>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          因天气原因导致的积压订单，我们将会在物流恢复正常后按照订单顺序陆续发出
          </NoticeBar>
          <Nav />
            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/202007/20200706165458_829376.jpg"/>
            <ul className="home_ul">
            <li>
            <ShopTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>全部周边</span>
            </li>
            <li>
            <AppstoreTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>新品尝鲜</span>
            </li>
            <li>
            <ShoppingTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>人气爆款</span>
            </li>
            <li>
            <BulbTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>生活用品</span>
            </li>
            </ul>

            </div>

        )
    }
}
export default Home;