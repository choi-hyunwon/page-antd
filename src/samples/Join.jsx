import React from "react";
import { Space, Typography, Button, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Upload,Segmented, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';


import '../assets/scss/samples/Join.scss';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function Join(props) {
    const [componentDisabled, setComponentDisabled] = useState(true);

    return (
        <div className="Join">
            <Title>Join</Title>
            <Form
                layout="vertical"
            >
                <Form.Item label="아이디" required>
                    <Input />
                </Form.Item>
                <Form.Item label="비밀번호" required>
                    <Input.Password
                        placeholder="input password"
                        />
                </Form.Item>
                <Form.Item label="비밀번호 확인" required>
                    <Input.Password
                        placeholder="input password"
                        />
                </Form.Item>
                <Form.Item label="이름" required>
                    <Input />
                </Form.Item>
                <Form.Item label="생년월일">
                    <Input />
                </Form.Item>
                <Form.Item label="성별">
                    <Segmented options={['남자', '여자']} block />
                </Form.Item>
                <Form.Item label="이메일">
                    <Input />
                </Form.Item>
                <Form.Item label="휴대폰번호">
                    <Input.Group compact>
                        <Select
                            defaultValue="010"
                            style={{
                            width: '20%',
                        }}>
                            <Select.Option value="010">010</Select.Option>
                        </Select>
                        <Input
                            style={{
                            width: '80%',
                            }}
                            defaultValue="26888888"
                        />
                    </Input.Group>
                </Form.Item>
                
                <Space className="btnWrap">
                    <Button size="large">초기화</Button>
                    <Button type="primary" size="large">회원가입</Button>
                </Space>
            </Form>

        </div>
    );
}

export default Join;
