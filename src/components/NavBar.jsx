
import React from 'react';
import { HomeOutlined, UserOutlined} from '@ant-design/icons';
import { Menu } from 'antd';

import {Link} from "react-router-dom";

const menuItems = [];
const items = [
    {name : "Home", path : "/", icon : <HomeOutlined/>},
    {name : "login", path : "/login", icon : <UserOutlined/>},
    {name : "cardList", path : "/cardList", icon: <HomeOutlined/>},
    {name : "table", path : "/table", icon : <HomeOutlined/>},
    {name : "boardList", path : "/boardList", icon : <HomeOutlined/>},
    {name : "boardView", path : "/boardView", icon : <HomeOutlined/>},
    {name : "boardWrite", path : "/boardWrite", icon : <HomeOutlined/>},
]
items.forEach((item, index)=>{
    menuItems.push({
        label : <Link to={item.path}>{item.name}</Link>,
        key : index,
        icon : item.icon
    })
})
  
function NavBar() {
    return (
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={menuItems}/>      
    );
}

export default NavBar;
