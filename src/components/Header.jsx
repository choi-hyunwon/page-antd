import React from 'react';
import { UserOutlined , LogoutOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space , Button, Tooltip} from 'antd';

// const { Title, Paragraph } = Typography;

function Header(props) {
    return (
        <div id="header">
            
            <Space size="small" align="center">
                <Badge count={1}>
                <Avatar icon={<UserOutlined />} />
                </Badge>
                홍길동님 안녕하세요.
                <Tooltip title="Logout"><Button icon={<LogoutOutlined />} href="" /></Tooltip>
            </Space>
        </div>
    );
}

export default Header;
