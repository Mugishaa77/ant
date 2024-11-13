import React from "react";
import { Flex, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
       <>
       <Flex align='center' justify='center' >
        <div className="logo">
        <FontAwesomeIcon icon={faLeaf} />
        </div>
        </Flex>

        <Menu mode='inline' defaultSelectedKeys={['1']} className="menu-bar" />

        </>
    )
}

export default Sidebar