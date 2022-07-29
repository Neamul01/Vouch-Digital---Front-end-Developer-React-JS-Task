import React from 'react';
import { Layout } from 'antd';

const Login = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <div>
            <Layout>
                <Header>

                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
};

export default Login;