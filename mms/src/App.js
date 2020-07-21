import React from 'react';
import './App.css';

import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, ShoppingOutlined, PropertySafetyOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Title level={3} style={{ color: 'white', float: 'left', paddingTop: '14px' }}>CF周边后台管理系统</Title>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
            <Menu.Item key="1">登录</Menu.Item>
            <Menu.Item key="2">注册</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="首页">
              </SubMenu>
              <SubMenu key="sub2" icon={<PropertySafetyOutlined />} title="会员管理">
              </SubMenu>
              <SubMenu key="sub3" icon={<ShoppingOutlined />} title="商品管理">
              </SubMenu>
              <SubMenu key="sub4" icon={<LaptopOutlined />} title="订单管理">
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '10px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
            </Content>
          </Layout>
        </Layout>
      </Layout>,
    </div>
  );
}

export default App;
