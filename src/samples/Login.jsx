import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Card , Button, Checkbox, Form, Input , Typography, Divider, Alert} from 'antd';

import '../assets/scss/samples/Login.scss';

const { Title, Text } = Typography;

function Login() {
    return (
        <div className="login">
        <Card>
            <Title><UserOutlined /> Login</Title>
            <Alert
                message="초기 로그인 정보는 관리자에게 문의하세요."
                type="warning"
                showIcon
            />
            <Form
                name="basic"
                style={{
                // maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                label="사번"
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
                label="비밀번호"
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
                <Button type="primary" htmlType="submit"  size="large" block>
                    로그인
                </Button>
                </Form.Item>

                <Divider>
                    <Button type="link">register now!</Button>
                </Divider>

            </Form>
            
        </Card>
        </div>
      );
}

export default Login;
