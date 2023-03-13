import React from 'react';
import { UserOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space , Button, Input} from 'antd';

import '../assets/scss/components/Header.scss';

function Header(props) {
    return (
        <div id="header">
            
            <Space size="small" align="center">
                <Badge count={1}>
                <Avatar icon={<UserOutlined />} />
                </Badge>
                홍길동님 안녕하세요.
                <Input.Group compact>
                    <Button size="small">개인정보수정</Button>
                    <Button size='small' href="">로그아웃</Button>
                </Input.Group>
            </Space>
        </div>
    );
}

export default Header;
