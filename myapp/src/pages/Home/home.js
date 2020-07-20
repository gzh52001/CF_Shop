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
        data:[]//商品列表数据
    }

    goto = (path)=>{
        this.props.history.push(path);
    }

    
   async componentDidMount(){
    const {data} = await mock.pointsList();
    console.log(data)
    // data.data.forEach(tiem => {
        
    // });
    // const categories = data.slice(1).map(item=>item.id);

 
    this.setState({
        data:[...data.data]
    })
}

    render(){        
        const {data} = this.state; 
        console.log(data)
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


{/* 
             <div className="goodslist">
                    {
                    data.map((item,idx)=>(
                    <div  key={idx}>
                      <h3>{item.title}</h3>
                    <Row gutter={16}>
                     {
                    data.map((goods)=>(
                       <Col key={goods.id} className="gutter-row" span={6} onClick={this.goto.bind(this,goods.goods_id)}>
                        <img src={goods.sProfileImg} />
                        <h4>{goods.good_name}</h4>
                        <p className="price">
                        <del>{goods.iOriPrice}</del>
                     <span>{goods.iPromotePrice}</span>
                        </p>
                        </Col>
                        ))
                        }         
                     </Row>
                    </div>
                        ))
                    }
                </div> */}
            </div>

        )
    }
}
export default Home;