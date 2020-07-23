import React from 'react';
import '../Reg/reg.scss'
import mock from '../../api/mock'
import http from '../../utils/http'


class Reg extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '', //账号
    //         password: '', // 密码
    //     }
    // }
    // async componentDidMount(){
    //    let a= await mock.red("rrr",6666);
    //    console.log(a)
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        console.log(this.state.password)
    }

    handelChange1(e) {
        this.setState({
            username: e.target.value,
        })
    }
    handelChange2(e) {
        this.setState({
            password: e.target.value
        })
    }

    okBtn = () => {
        const { username, password } = this.state

        // http.get('/user/checkname', { username, password }).then(req => {
        //     console.log(req)
        // }).catch(req => {
        //     console.log('123', req)
        // })

        this.checkname(username, password)

    }
    async checkname(username, password) {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        var uPattern = /^[a-zA-Z0-9]{4,16}$/;
        if (uPattern.test(username)) {
            let { data } = await mock.checkname(username, password);
            // return data.flag
            if (data.flag) {
                let t = await mock.reg(username, password);
                console.log(username, password)
                console.log(t)
                alert("恭喜注册成功")
                this.props.history.push('../login')

            } else {

                alert("已经存在用户名")
            }
        }
        else {
            alert("用户名需要4到16位（字母，数字")
        }

    }

    // let username = this.state.username;
    // let password = this.state.password;
    //     if (username ===''|| password ===''){

    //     }


    render() {
        console.log(this.state)
        return (
            <div className="from-reg">
                <h1>注册账户</h1>

                <div className="reg">
                    {/* 账户 */}
                    <div className="from-list">
                        <input className="userz" type="text" placeholder="请输入用户名"
                            onChange={this.handelChange1.bind(this)} defaultValue={this.state.username} >
                        </input>
                    </div>
                    {/* 密码 */}
                    <div className="from-list">
                        <input className="password" type="password" placeholder="请输入登录密码"
                            onChange={this.handelChange2.bind(this)} defaultValue={this.state.password} >
                        </input>
                    </div>

                    <p className="tos">
                        <span>已有账号？</span>
                        <a className="a" onClick={this.handleGolosin.bind(this)}>立即登陆</a>
                    </p>

                    <div className="from-btn">
                        <button className="register"

                            onClick={this.okBtn}

                        >注册</button>
                    </div>
                </div>
            </div>
        )
    }
    handleGolosin() {
        this.props.history.push('../login')
    }

}


export default Reg;