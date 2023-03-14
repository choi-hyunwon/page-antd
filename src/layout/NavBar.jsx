import React from 'react';
import {
    AppstoreOutlined,
    DesktopOutlined,
    UnorderedListOutlined,
    TableOutlined,
    SmileOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import {useNavigate} from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

// name , path , icon
const menuItems = [
    getItem('첫페이지', '/', <HomeOutlined />),
    getItem('로그인', '/Login', <DesktopOutlined />),
    getItem('회원가입', '/Join', <DesktopOutlined />),
    getItem('table', '/Table', <TableOutlined />),
    getItem('cardList', '/CardList', <AppstoreOutlined />),
    getItem('board', 'sub1', <UnorderedListOutlined />, [
        getItem('boardList', '/BoardList'),
        getItem('boardView', '/BoardView'),
        getItem('boardWrite', '/BoardWrite'),
    ]),
    getItem('Navigation long text Test', 'sub2', <SmileOutlined />, [
        getItem('Option 9', '8'),
        getItem('Option 10', '9'),
        getItem('2Depth', '10', null,
            [getItem('3depth menu', '11'), getItem('3depth menu', '12')]
        ),
    ]),
];

function NavBar() {
    const navigate = useNavigate();
    return (
            // gnb로 사용 시 mode="horizontal" , snb 사용시 mode="inline"
            <Menu onClick={(e)=>navigate(e.key)} theme="dark" defaultSelectedKeys={['0']} mode="inline"  items={menuItems}/>
    );
}

export default NavBar;