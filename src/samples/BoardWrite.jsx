import React from "react";
import { Space, Typography, Button, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Upload,Segmented, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';


import '../assets/scss/samples/BoardWrite.scss';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function BoardWrite(props) {
    const [componentDisabled, setComponentDisabled] = useState(true);

    return (
        <div className="boardWrite">
            <Title>BoardWrite</Title>
            <Form
                layout="vertical"
            >
                <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                    <Checkbox>Checkbox</Checkbox>
                </Form.Item>
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value="apple"> Apple </Radio>
                        <Radio value="pear"> Pear </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input" required>
                    <Input />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="RangePicker">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Segmented">
                    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                </Form.Item>
                <Form.Item label="TextArea">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                    
                        <PlusOutlined />
                    </Upload>
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item>
                
                <Space className="btnWrap">
                    <Button type="primary" size="large">저장</Button>
                    <Button size="large">초기화</Button>
                </Space>
            </Form>

        </div>
    );
}

export default BoardWrite;
