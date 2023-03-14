import React from 'react';
import {Layout, FloatButton} from 'antd';
import {Route, Routes} from "react-router-dom";
import RouteList from "./app/router";

import './assets/scss/Ui.scss';

// layout
import Header from "./layout/Header";
import LocationPath from "./layout/LocationPath";
import NavBar from "./layout/NavBar";

const {Footer, Sider} = Layout;

const App  = () => {

    return (
            <Layout>
                <Header />
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
                        <NavBar/>
                    </Sider>
                    <Layout>
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
                    </Layout>
                </Layout>
                <FloatButton.BackTop/>
            </Layout>
    );
};

export default App;