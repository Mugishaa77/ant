import React from "react";
import { Flex, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined} from '@ant-design/icons';


const Sidebar = () => {
    return (
       <>
       <Flex align='center' justify='center' >
        <div className="logo">
        <FontAwesomeIcon icon={faLeaf} />
        </div>
        </Flex>

        <Menu 
         mode='inline'
         defaultSelectedKeys={['1']} 
         className="menu-bar"
         items={[{
            key :'1',
            icon: <UserOutlined/>,
            label: 'Dashboard',
         },
         {
            key :'2',
            icon: <CarryOutOutlined/>,
            label: 'My Orders',
         },
         {
            key :'3',
            icon: <OrderedListOutlined/>,
            label: 'ToDo',
         },
         {
            key :'4',
            icon:<ProfileOutlined/> ,
            label: 'Profile',
         },
         {
            key :'5',
            icon: <SettingOutlined/>,
            label: 'Settings',
         },
         {
            key :'6',
            icon: <LogoutOutlined/>,
            label: 'Logout',
         }
         ]} />

        </>
    )
}

export default Sidebar