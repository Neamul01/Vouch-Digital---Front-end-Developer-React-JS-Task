import React, { useState } from "react";
import LeftMenu from "./Left";
import RightMenu from ".Rright";
import { Drawer, Button } from "antd";
import "antd/dist/antd.css";
import "../src/app.css";


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false)
    };
    return (
        <nav className="menuBar">
            <div className="logo">
                <a href="www.marca.com">logo</a>
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <span className="barsBtn" />
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftMenu />
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;