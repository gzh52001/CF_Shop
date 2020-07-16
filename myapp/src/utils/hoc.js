import React from 'react';

// 传递属性
// 作用：往组件传递属性，提取公共代码
export function withUser(InnerComponent){
    class OuterComponent extends React.Component{
        constructor(){
            super();
            this.state = {
                userInfo:{}
            }
        }
        componentDidMount(){
            console.log('OuterComponent.props',this.props);
            let userInfo
            try{
                userInfo = localStorage.getItem('userInfo');
                userInfo = JSON.parse(userInfo)
            }catch(err){
                userInfo = {}
            }
            this.setState({
                userInfo
            })
        }
        render(){
            return <InnerComponent {...this.state} {...this.props} />
        }
    }
    return OuterComponent
}
