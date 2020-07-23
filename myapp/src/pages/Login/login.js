import React from 'react';
import '../Login/login.scss';
import mock from '../../api/mock'
import http from '../../utils/http'
import { Alert } from 'antd';



class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '', //账号
    //         passwred: '', // 密码
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            u: "",
            // b,
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
            password: e.target.value,
        })
    }
    okBtn = () => {
        const { username, password } = this.state
        this.setState({
            u: ""
        })
        // http.get('/user/login', { username, password }).then(req => {
        //     console.log(req)
        // }).catch(req => {
        //     console.log('123', req)
        // })
        this.red(username, password)
        // console.log(this.red())
    }
    async red(username, password) {
        let a = await mock.Login(username, password);
        if (a.data.code == 2000) {
            console.log('OKOKOKOKOKO'),
                // <Alert message="登陆成功" type="success" />
                this.state.u = <Alert message="登陆成功" type="success" closable="boolean" />;
            // alert("登陆成功")
            this.props.history.push('../home')

        } else {
            (a.data.code == 3000),
                // <Alert message="登陆失败" type="error" />
                // closeText
                this.state.u = <Alert message="登陆失败" type="success" closable="boolean" />;
            // alert("用户名或密码")
            this.props.history.push('../login')
        }
        console.log(a);
        console.log(a);

    }

    async componentDidMount() {

    }
    render() {
        console.log(this.state)
        let { u } = this.state
        console.log(u)
        return (
            <div className="login">
                <h1>密码登陆</h1>
                {
                    u
                }
                <div className="from">
                    {/* 用户 */}
                    <div className="from-list">
                        <input type="text" className="user" placeholder="请输入账号"
                            onChange={this.handelChange1.bind(this)} defaultValue={this.state.username}>
                        </input>
                    </div>
                    {/* <div className="from-list">
                        <input type="text" className="user" placeholder="请输入账号"
                            onChange={value => this.setState({ username: value })}>
                        </input>
                    </div> */}
                    {/* 密码 */}
                    {/* <div className="from-list">
                        <input type="passwred" className="pass" placeholder="请输入密码"
                            onChange={value => this.setState({ password: value })}>
                    </input> */}
                    <div className="from-list">
                        <input type="text" className="user" placeholder="请输入密码"
                            onChange={this.handelChange2.bind(this)} defaultValue={this.state.password}>
                        </input>
                    </div>

                    <p className="tos">
                        <span>还没有账号？</span>
                        <a className="a" onClick={this.handleGoreg.bind(this)}>立即注册</a>
                    </p>

                    <div className="submit-btn">
                        <button className="login-1" onClick={this.okBtn}>登陆</button>
                        {/* onClick={this.handleGohome.bind(this)} */}
                    </div>

                    {/* <Alert message="Error Text" type="error" closeText="string " closable="boolean" /> */}

                </div>



            </div >
        )
    }

    handleGoreg() {
        this.props.history.push('../reg')
    }

    // handleGohome() {
    //     this.props.history.push('../home')
    // }
}

export default Login;