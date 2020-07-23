import React from 'react';
import { AudioOutlined,HomeOutlined ,MailOutlined,AppstoreOutlined,OrderedListOutlined} from '@ant-design/icons';
import { Input,Menu   } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { SubMenu } = Menu;



class Sort extends React.Component{
    state = {
        current: 'mail',
      };
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
    render(){
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
            <Menu.Item key="setting:1">one</Menu.Item>
            <Menu.Item key="setting:2">two</Menu.Item>
            <Menu.Item key="setting:3">three</Menu.Item>
            <Menu.Item key="setting:4">four</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
        
        <SubMenu  icon={<OrderedListOutlined />} title="排序">
          {/* <Menu.ItemGroup title="Item 1" mode="inline"> */}
            <Menu.Item key="setting:1">one</Menu.Item>
            <Menu.Item key="setting:2">two</Menu.Item>
            <Menu.Item key="setting:3">three</Menu.Item>
            <Menu.Item key="setting:4">four</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
        <SubMenu  icon={<MailOutlined />} title="全部">
          {/* <Menu.ItemGroup title="Item 1" mode="inline"> */}
            <Menu.Item key="setting:1">one</Menu.Item>
            <Menu.Item key="setting:2">two</Menu.Item>
            <Menu.Item key="setting:3">three</Menu.Item>
            <Menu.Item key="setting:4">four</Menu.Item>
          {/* </Menu.ItemGroup> */}
        </SubMenu>
 
      </Menu>
         </div>
             );
           }
         }
        

    

export default Sort;