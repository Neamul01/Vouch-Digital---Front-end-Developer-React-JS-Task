import React from 'react';
import { Layout } from 'antd';

const Login = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <div>
            <Layout>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Login;