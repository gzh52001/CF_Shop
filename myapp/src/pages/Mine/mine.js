import React from 'react';
import { Avatar } from 'antd';
import { RightOutlined,
         WalletTwoTone,
         MailTwoTone,
         DollarCircleTwoTone,
         CarTwoTone,
         MessageTwoTone,
         HeartOutlined,
         PayCircleOutlined,
         EnvironmentOutlined,
         StarOutlined,
         ShopOutlined,
         MessageOutlined,
         QuestionCircleOutlined,
         CustomerServiceOutlined,
         SoundOutlined
        } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './mine.scss';
class Mine extends React.Component{
    goto = (path)=>{
        this.props.history.push(path);
    }
    render(){
        return(
            <div>
            <Avatar className="tx" src="https://shp.qlogo.cn/daoju/9999/9999_1/0" size={64}  />
            <span className="bt">游客</span>
            <RightOutlined className="jt" />
            <p>我的订单<span className="yjt">全部订单></span></p>
            <ul className="mine_ul">
            <li>
            <WalletTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>待付款</span>
            </li>
            <li>
            <CarTwoTone  />
            <span onClick={this.goto.bind(this,'/sort')}>待发货</span>
            </li>
            <li>
            <MailTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>待收货</span>
            </li>
            <li>
            <MessageTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>待评价</span>
            </li>
            <li>
            <DollarCircleTwoTone />
            <span onClick={this.goto.bind(this,'/sort')}>退换货</span>
            </li>
            </ul>
            <ul className="goods">
            <li>
            <HeartOutlined />
            <span>我的收藏<span className="yjt">></span></span>
            </li>
            <li>
            <PayCircleOutlined />
            <span>优惠卡卷<span className="yjt">></span></span>
            </li>
            <li>
            <EnvironmentOutlined />
            <span>地址管理<span className="yjt">></span></span>
            </li>
            <li>
            <ShopOutlined />
            <span>领取中心<span className="yjt">></span></span>
            </li>
            <li>
            <StarOutlined />
            <span>订阅中心<span className="yjt">></span></span>
            </li>
            <li>
            <MessageOutlined />
            <span>我的评价<span className="yjt">></span></span>
            </li>
            <li>
            <QuestionCircleOutlined />
            <span>常见问题<span className="yjt">></span></span>
            </li>
            <li>
            <CustomerServiceOutlined />
            <span>意见反馈<span className="yjt">></span></span>
            </li>
            <li>
            <SoundOutlined />
            <span>商场公告<span className="yjt">></span></span>
            </li>
            </ul>
            </div>
        )
    }
}
export default Mine;