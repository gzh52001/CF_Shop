import React from 'react';
import './home.scss';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import {ShopTwoTone,AppstoreTwoTone,BulbTwoTone,ShoppingTwoTone} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import Nav from './nav'
import mock from '../../api/mock.js'


class Home extends React.Component{
    state={
        // categories:[]//商品列表数据
        list:[]
    }

    goto = (path)=>{
        this.props.history.push(path);
    }
    gothis = (iMallId)=>{
        this.props.history.push('/details/'+iMallId);
        
    }

    
   async componentDidMount(){
    const {data} = await mock.pointsList();

        // const aa =data[0].data[0].id
        // console.log(aa);
        this.setState({
        list:data
    })

    
}

    render(){        
        const {list} = this.state; 
        console.log(list)
        return(
            <div>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          因天气原因导致的积压订单，我们将会在物流恢复正常后按照订单顺序陆续发出
          </NoticeBar>
          <Nav />
            <img className="home_img" src="https://game.gtimg.cn/images/daojushop/zb/ad/202007/20200706165458_829376.jpg"/>
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
            <div className="goodslist">
             {
                 list.map((item,idx)=>{
                  return <div key={idx}>
                           <h3>{item.form_title}</h3>
                           <Row gutter={16}>
                           {
                               item.data.map((goods,id)=>{
                                   return <Col key={id} className="gutter-row" span={12} onClick={this.gothis.bind(this,goods.iMallId)}>
                                           <img src={goods.sProfileImg} ></img>
                                           <h4>{goods.good_name}</h4>
                                           <p className="price">
                                           <del>{goods.iOriPrice}</del>
                                           <span>{goods.iPromotePrice}</span>
                                           </p>
                                         </Col>
                               })
                           }
                           </Row>
                         </div>
                 })
             }
            </div>
             <p className='all-sp' onClick={this.goto.bind(this,'/sort')}>
             查看所有商品
             </p>
             
            </div>

        )
    }
}
export default Home;