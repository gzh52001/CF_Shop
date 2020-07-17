import React from 'react';
import './home.scss';
import { Input  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {ShopTwoTone,AppstoreTwoTone,BulbTwoTone,ShoppingTwoTone} from '@ant-design/icons';

const { Search } = Input;

class Home extends React.Component{
    render(){
        const suffix = (
            <AudioOutlined
              style={{
                fontSize: 20,
                color: '#1890ff',
              }}
            />
          );
        // const {current} = this.state;
        return(
            <div>
            <Search
            size="large"
            placeholder="请输入搜索 商品"
            suffix={suffix}
            onSearch={value => console.log(value)} 
            />
            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/202007/20200706165458_829376.jpg"/>
            <ul>
            <li>
            <ShopTwoTone />
            <span>全部周边</span>
            </li>
            <li>
            <AppstoreTwoTone />
            <span>新品尝鲜</span>
            </li>
            <li>
            <ShoppingTwoTone />
            <span>人气爆款</span>
            </li>
            <li>
            <BulbTwoTone />
            <span>生活用品</span>
            </li>
            </ul>

            </div>

        )
    }
}
export default Home;