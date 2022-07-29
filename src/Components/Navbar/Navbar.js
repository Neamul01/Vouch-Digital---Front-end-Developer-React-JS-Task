import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import "./Navbar.css";


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <nav className="menuBar">
            <div className="logo">
                <a href="!#">ATools<span style={{ color: 'red', fontWeight: 'bold' }}>.</span></a>
            </div>
            <div className="menuCon">
                <Menu className="rightMenu">
                    <Menu.Item key='signin' >
                        <button className="customButton" style={{ backgroundColor: '#023047' }}>Start From Trial</button>
                    </Menu.Item>
                    <Menu.Item key='login'>
                        <button className="customButton" style={{ backgroundColor: '#fb8500' }}>Login</button>
                    </Menu.Item>
                </Menu>
                <Button className="barsMenu" type="secondary" onClick={() => setVisible(true)}>
                    <span className="barsBtn" />
                </Button>
                <Drawer
                    // title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={() => setVisible(false)}
                    visible={visible}
                >
                    <>
                        <Menu>
                            <Menu.Item key={'home'}>
                                <a href="!#">Home</a>
                            </Menu.Item>
                        </Menu>
                    </>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;