import React from 'react';
import { Col, Layout, Row, Checkbox, Form, Input, Button, message } from 'antd';
import './Login.css'

const Login = () => {
    const onFinish = (values) => {
        console.log(values.email, values.password);
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: {
                    "email": values.email,
                    "password": values.password
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.error && message.error(data.error);
                data.token && message.success('Login Succed...!!')
            })
    };


    return (
        <div className='login-page'>
            <Layout>
                <Row className='ant-row-custom' gutter={4}>
                    <Col className='login-form-area' span={9}>
                        <div className="login-title">
                            <h2>Welcome Back</h2>
                            <p>Good to see you again.</p>
                        </div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email Address*" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        // required: true,
                                        type: 'password',
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    type="password"
                                    placeholder="Password*"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember Password</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="!#">
                                    Forgot password?
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={15}>
                        <div className='cover-div'>

                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default Login;