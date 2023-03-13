import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Card , Button, Checkbox, Form, Input , Typography, Divider} from 'antd';

import '../assets/scss/pages/Login.scss';

const { Title, Paragraph } = Typography;

function Login() {
    return (
        <div className="login">
        <Card style={{ width: 600 }}>
            <Title><UserOutlined /> Login</Title>
            <Paragraph>domfam ant.D sample login</Paragraph>
            <Form
                name="basic"
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                name="remember"
                valuePropName="checked"
                >
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                >
                <Button type="primary" htmlType="submit" block>
                    Submit
                </Button>
                </Form.Item>

                <Divider>
                    <Button type="link">register now!</Button>
                </Divider>

            </Form>
            {/* <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>
        
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
            </Form> */}
        </Card>
        </div>
      );
}

export default Login;
