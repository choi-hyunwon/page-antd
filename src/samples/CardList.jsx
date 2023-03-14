import React from "react";
import { SmileOutlined ,MoreOutlined} from '@ant-design/icons';
import { Card, Col, Row , Progress, Descriptions , Typography} from 'antd';

import '../assets/scss/samples/CardList.scss';

const { Title, Paragraph , Text} = Typography;

  
function cardList() {
    return (
        <div className="cardList">
        <Title>cardList</Title>
        <Row gutter={16} className="cardList" align="stretch">
            {/* 24/span으로 row 갯수 결정됨 */}
            <Col span={12}>
                <Card
                    title="Card title"
                    extra={<a href="#"><MoreOutlined /></a>}
                    // actions={[
                    // <SettingOutlined key="setting" />,
                    // <EditOutlined key="edit" />,
                    // <EllipsisOutlined key="ellipsis" />,
                    // ]}
                >
                    <Descriptions title="User Info"  layout="vertical" size='small' column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}>
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
            <Col span={12}>
                <Card
                    title="2col Card title"
                    extra={<a href="#"><MoreOutlined /></a>}
                >
                    <Descriptions title="User Info"  size='small' bordered column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>

            <Col span={8}>
                <Card
                    title="3col Card title"
                    extra={<a href="#"><MoreOutlined /></a>}
                >
                    <Text strong>5/15</Text>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="3col Card title"
                    extra={<a href="#"><MoreOutlined /></a>}
                >
                    
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="3col Card title"
                    extra={<a href="#"><MoreOutlined /></a>}
                >
                </Card>
            </Col>
        </Row>
        </div>
      
    );
}

export default cardList;
