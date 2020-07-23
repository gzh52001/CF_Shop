import React,{Component} from 'react';
import mock from '../../api/mock.js'
import './details.scss';
import { Button,Carousel  } from 'antd';
import {ShoppingCartOutlined,ShoppingOutlined} from '@ant-design/icons'

class Details extends Component{
    state= {
        list:[]
    }
    add2cart = ()=>{

    }
    buyNow = ()=>{
        const {history} = this.props;

        history.push('/cart');
        
  
        // this.dd(user_id,good_name,iMallId,iMallQty,iOriPrice)
    }
    
    // async dd(user_id,good_name,iMallId,iMallQty,iOriPrice){
    //     const tt = await mock.clickadd(user_id,good_name,iMallId,iMallQty,iOriPrice);
    //     console.log(tt);
    // }


    async componentDidMount(){
        //获取商品id
        // const {match} = this.props;
        // const {id} = match.params;
        
        const {data} = await mock.detailslist(this.props.match.params.iMallid);
        console.log(data);

 
        
        this.setState({
            list:data
        })
    }
    render(){
        console.log(this.props.match.params.iMallid);
        let {good_name}=list
        console.log(good_name)
        
        const {list} = this.state; 
        console.log(list)
        return(
            <div>
            <div className="goodslist">
             {
                 list.map((item,idx)=>{
                  return <div key={idx}>
                    <Carousel autoplay>
                        <div>
                        <img src={item.sProfileImg} />
                        <h3></h3>
                        </div>
                        
                        <div>
                        <img src={item.sDetailImg.img1} />
                        <h3></h3>
                        </div>
                        
                        <div>
                        <img src={item.sDetailImg.img2} />
                        <h3></h3>
                        </div>
                        
                        <div>
                        <img src={item.sDetailImg.img3} />
                        <h3></h3>
                        </div>
                    </Carousel>,
                           <h4>{item.good_name}</h4>
                           <h4>{item.sMallBrief}</h4>
                            <p>原价：<del className="ys">${item.iOriPrice}</del></p>
                            <p>现价：<span className="ys">${item.iPromotePrice}</span></p>
                         </div>
                 })
                 
             }
             <Button.Group>
                    <Button type="primary" size="large" icon={<ShoppingCartOutlined />}>添加到购物车</Button>
                    <Button type="danger" size="large" icon={<ShoppingOutlined />} onClick={this.buyNow}>立即购买</Button>
                </Button.Group>
            </div>
            </div>
            )
            }
        }
export default Details;
