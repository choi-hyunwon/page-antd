import React from 'react';
import {Layout, FloatButton} from 'antd';
import {Route, Routes} from "react-router-dom";
import RouteList from "./app/router";

// import variables from './assets/scss/variables.scss';
import './assets/scss/Ui.scss';

// components
import Header from "./components/Header";
import LocationPath from "./components/LocationPath";
import NavBar from "./components/NavBar";

const {Footer, Sider} = Layout;

const App  = () => {

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                console.log(broken);
            }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}>
                <div className="logo"/>
                <NavBar/>
            </Sider>
            <Layout>
                <Header />
                <LocationPath />

                <main >
                    <Routes>
                        {RouteList.map((item, index) => (<Route key={index} {...item}/>))
}
                    </Routes>
                </main>
                <Footer style={{
                    textAlign: 'center'
                }}>
                    Domfam AntD page sample ©2023 Created by Ant UED
                </Footer>
                <FloatButton.BackTop/>
            </Layout>`
        </Layout>
    );
};

export default App;