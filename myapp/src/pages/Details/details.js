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
    }
    addgoods = ()=>{
        const {history} = this.props;
        // history.push('/cart');

        console.log(this.state.list[0])
        this.pushadd(this.state.list[0])
    }

    // gothis = (iMallId)=>{
    //     this.props.history.push('/cart/'+iMallId);
    // }
    
    async pushadd(aa){
        console.log('aa',aa.user_id,aa.good_name,aa.iMallId,aa.iMallQty,aa.iOriPrice,aa.sProfileImg)
        const tt = await mock.pushadd(3,aa.good_name,aa.iMallId,aa.iMallQty,aa.iOriPrice,aa.sProfileImg);
        console.log(tt);
    }





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
            <Button type="primary" size="large" icon={<ShoppingCartOutlined /> }onClick={this.addgoods}>添加到购物车</Button>
            <Button type="danger" size="large" icon={<ShoppingOutlined />} onClick={this.buyNow} >立即购买</Button>
                </Button.Group>
            </div>
            </div>
            )
            }
        }
export default Details;

// onClick={this.gothis.bind(this,item.iMallId)}
// onClick={this.buyNow}
