import React from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Table ,Button, Tooltip, Typography, Row, Col, Select, Space, Input} from 'antd';
import { useState } from 'react';

import '../assets/scss/pages/BoardList.scss';

const { Title } = Typography;
const { Search } = Input;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
      alignL:'center',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      alignL:'center',
    },
    {
        title: 'money',
        dataIndex: 'money',
        align: 'right',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Tooltip title="Delete"><Button icon={<DeleteOutlined />} href="" /></Tooltip>,
    },
    
      
];
const data = [
{key: '1', name: 'John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
{key: '2', name: 'Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
{key: '3', name: 'Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
{key: '4', name: 'Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
{key: '5', name: 'John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
{key: '6', name: 'Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
{key: '7', name: 'Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
{key: '8', name: 'Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
{key: '9', name: 'John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
{key: '10', name: 'Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
{key: '11', name: 'Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
{key: '12', name: 'Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
];


function BoardList(props) {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
      <div className="boardList">
        <Row gutter={8} justify="space-between" align="middle">
        <Col>
          <Title>Baord list</Title>
        </Col>
        <Col>
          <Space wrap>
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
            <Search
              placeholder="input search text"
              style={{
                width: 200,
              }}
            />
          </Space>
        </Col>
        </Row>

        <Table
          bordered
          columns={columns}
          dataSource={data}
           
        />
      </div>
    );
}

export default BoardList;
