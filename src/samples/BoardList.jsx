import React from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Table ,Button, Tooltip, Typography, Row, Col, Select, Space, Input} from 'antd';
import { useState } from 'react';

import '../assets/scss/samples/BoardList.scss';

const { Title } = Typography;
const { Search } = Input;

const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      align:'center',
    },
    {
      title: 'Title',
      dataIndex: 'name',
      align:'left',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align:'center',
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
  {key: '12', name: 'board title board title board title Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '11', name: 'board title board title board title Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '10', name: 'board title board title board title Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
  {key: '9', name: 'board title board title board title John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
  {key: '8', name: 'board title board title board title Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '7', name: 'board title board title board title Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '6', name: 'board title board title board title Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
  {key: '5', name: 'board title board title board title John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
  {key: '4', name: 'board title board title board title Disabled User',   age: 99,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '3', name: 'board title board title board title Joe Black',   age: 32,   address: 'Sydney No. 1 Lake Park',money:'$123,000'},
  {key: '2', name: 'board title board title board title Jim Green',   age: 42,   address: 'London No. 1 Lake Park',money:'$123,000'},
  {key: '1', name: 'board title board title board title John Brown',  age: 32,  address: 'New York No. 1 Lake Park',money:'$123,000'},
];


function BoardList(props) {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [bottom, setBottom] = useState('bottomCenter');

    return (
      <div className="boardList">
        <Title>board list</Title>
        <Row gutter={8} justify="space-between" align="middle">
        <Col>
          <Space wrap>
          <Input.Group compact>
          <Select
              defaultValue="category"
              options={[
                {
                  value: 'category',
                  label: 'Category',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                }
              ]}
            />
            <Search
              placeholder="검색어를 입력하세요."
              style={{
                width: 200,
              }}
            />
        </Input.Group>

          </Space>
        </Col>
        <Col>
          <Space className="btnWrap">
            <Button>기본버튼</Button>
            <Button>엑셀다운</Button>
            <Button type="primary">저장</Button>
          </Space>
        </Col>
        </Row>

        <Table
          bordered
          columns={columns}
          dataSource={data}
          pagination={{
            position: [bottom],
          }}
        />
      </div>
    );
}

export default BoardList;
