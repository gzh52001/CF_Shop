import React from 'react';
import { AudioOutlined,HomeOutlined ,MailOutlined,AppstoreOutlined,OrderedListOutlined} from '@ant-design/icons';
import { Input,Menu   } from 'antd';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import mock from '../../api/mock.js'

const { Search } = Input;
const { SubMenu } = Menu;



class Sort extends React.Component{
    state = {
        list:[],
        current: 'mail',
      };
      gothis = (iMallId)=>{
        this.props.history.push('/details/'+iMallId);
    }
  //   goto = (path)=>{
  //     this.props.history.push(path);
  // }
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

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
      <div className="goodslist">
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
         </div>
             );
           }
         }
        

    

export default Sort;