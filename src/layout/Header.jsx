import React from 'react';
import { UserOutlined} from '@ant-design/icons';
import { Avatar, Badge, Space , Button, Input} from 'antd';

import '../assets/scss/layout/Header.scss';
import NavBar from "./NavBar";

function Header(props) {
    return (
        <div id="header">
            <Space align="middle" className="loginInfo">
                <div className="logo"/>
                <Space size="small">
                    <Badge count={1}>
                        <Avatar icon={<UserOutlined />} />
                    </Badge>
                    홍길동님 안녕하세요.
                    <Input.Group compact>
                        <Button size="small">개인정보수정</Button>
                        <Button size='small' href="">로그아웃</Button>
                    </Input.Group>
                </Space>
            </Space>
            {/*<NavBar/>*/}

        </div>
    );
}

export default Header;
