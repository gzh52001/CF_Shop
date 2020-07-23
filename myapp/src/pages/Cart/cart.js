import React from 'react';
import { Button,Row,Col,List,InputNumber,Tooltip } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
// import {connect} from 'react-redux';
import mock from '../../api/mock.js'
// import cartAction from '@/store/actions/cart';

import './cart.scss';
class Cart extends React.Component{
    state= {
        list:[]
    }
    // removeCart(goods_id){
    //     dispatch({
    //         type:'remove_from_cart',
    //         goods_id
    //     })
    //     // dispatch(cartAction.remove(goods_id))
    // }
    
    // removeCart = ()=>{
    //     this.props.history.remove(iMallId)
    // }
    
    goto = (path)=>{
        this.props.history.push(path);
    }
    changeQty = ()=>{

    }
    async componentDidMount(){
        // 获取商品id
    const {data} = await mock.cartslist(3);
    console.log(data);
    this.setState({
        list:data
    })
    }
    render(){
        const {cartlist,removeCart,clearCart,changeQty,totalPrice,remove,change,clear} = this.props;
        const {list} = this.state; 
        console.log(list)
        return(
        <div>
        <div className="cart">
                {
                    list.map((item,idx)=>{
                        return <div key={idx}>
                        <List.Item extra={
                         <Tooltip title="删除">
                             <Button type="danger" shape="circle" ghost size="small" icon={<CloseOutlined />} ></Button>
                         </Tooltip>
                         }>
                        <List.Item.Meta
                        avatar={<img src={item.sProfileImg} />}
                        title={<>{item.good_name}</>}
                        description={
                        <div className="price">
                                 <span>{item.iPromotePrice}</span> &times; 
                                 <InputNumber size="small" style={{width:60,marginLeft:8}} min={1} max={10} value={item.iMallQty} onChange={this.changeQty} />
                             </div>
                        }
                        />
                        </List.Item>
                        </div>
                         }
                        
                    )
                    }

                <Row gutter={20}>
                    <Col span={12}>
                        <Button type="danger" ghost >清空购物车</Button>
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}>
                        <Button type="danger">去结算</Button>
                        <p className="price">总价：<span>{100}</span></p>
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}
export default Cart;