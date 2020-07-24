/* eslint-disable */
import React from 'react';
import { AudioOutlined,HomeOutlined ,MailOutlined,AppstoreOutlined,OrderedListOutlined} from '@ant-design/icons';
import { Input,Menu   } from 'antd';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import mock from '../../api/mock.js'
import './sort.scss';
const { Search } = Input;
const { SubMenu } = Menu;



class Sort extends React.Component{
    state = {
        list:[],
        tolist:[],
        current: 'mail',
        display:false,
      };
      gothis = (iMallId)=>{
        this.props.history.push('/details/'+iMallId);
    }
      handleClick = e => {
        console.log('click ', e.key);
        this.setState({ current: e.key });
        this.private(e.key)
      };
      async private(e){      
        if(e=="mail"){
          e=1;
          this.setState({
            display:false
         })
        }else{
         e;
         this.setState({
          display:true
       })
       }
        const ccc = await mock.private(e);  
        this.setState({
           tolist:ccc.data
        })
      }


      async componentDidMount(){
        const ccc = await mock.private(3);  
        const {data} = await mock.pointsList();    
        this.setState({
          list:data,
          tolist:ccc.data,
        })     
      
    }
    render(){
      const {list} = this.state; 
      const {tolist} =this.state;
      const display = {display:this.state.display?"block" :"none"};
      const display2 = {display:this.state.display?"none" :"block"}
        const { current } = this.state;
        const suffix = (
            <AudioOutlined
              style={{
                fontSize: 20,
                color: '#1890ff',
              }}
            />
          );

        
 
        return(
            <div>
           <Search
            size="large"
            placeholder="请输入搜索 商品"
            suffix={suffix}
            onSearch={value => console.log(value)} 
            />
        <Menu 
        onClick={this.handleClick} 
        selectedKeys={[current]} 
        mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />} >
          默认
        </Menu.Item>
        <SubMenu  icon={<AppstoreOutlined />} title="分类">
          {/* <Menu.ItemGroup title="Item 1" mode="inline"> */}
            <Menu.Item key="1">家居日用</Menu.Item>
            <Menu.Item key="2">数码外设</Menu.Item>
            <Menu.Item key="3">服饰时尚</Menu.Item>
            <Menu.Item key="4">模型手办</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
        
        <SubMenu  icon={<OrderedListOutlined />} title="排序">
          {/* <Menu.ItemGroup title="Item 1" mode="inline"> */}
            <Menu.Item key="5">新品优先</Menu.Item>
            <Menu.Item key="6">人气优先</Menu.Item>
            <Menu.Item key="7">销量排序</Menu.Item>
            <Menu.Item key="8">价格降序</Menu.Item>
            <Menu.Item key="9">价格升序</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
        <SubMenu  icon={<MailOutlined />} title="全部">
          {/* <Menu.ItemGroup title="Item 1" mode="inline"> */}
            <Menu.Item key="10">全部</Menu.Item>
            <Menu.Item key="11">有货</Menu.Item>
            <Menu.Item key="12">包邮</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
 
      </Menu>
      <div className="goodsone" style={display2}>
             {
                 list.map((item,idx)=>{
                  return <div key={idx}>
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
       <div className="goodstwo" style={display} >
       <Row gutter={16}>
           {
              tolist.map((goods,id)=>{
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
       </div>
             );
           }
         }
        
export default Sort;