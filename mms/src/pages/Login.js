import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Alert, message } from 'antd';
import 'antd/dist/antd.css'
import mock from '../api/mock'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const onFinish = values => {
  console.log('Success:', values);
};


const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};



class Login extends Component {


  async onFinish(values) {
    console.log('用户名', values);
    let res = await mock.checkname(values.username, values.password)
    console.log('返回结果', res);
    console.log(res.data.flag);

    if (res.data.code === 3000); {
      // console.log("用户名错误或密码错误");
      // message.error('登陆失败')

      this.props.history.push('./Home')

    };
    if (res.data.code === 2000) {
      // message.success('登陆成功');
      // this.props.history.push('../Home/Home')

      message.error('登陆失败')
      this.props.history.push('../Login')


    }

  }

  success = (info) => {
    message.success(info)
  }

  error = (info) => {
    message.error(info)
  }

  render() {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onFinish={this.onFinish.bind(this)}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入帐号'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" >
            登陆
        </Button>
        </Form.Item>
      </Form>

    )

  }

}


export default Login;