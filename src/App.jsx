import React, {useState} from 'react';
import {Layout, Button} from 'antd';
import Sidebar from './components/Sidebar';
import {MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css';

const {Sider, Header, Content} = Layout;

export default function App () {
  const [collapsed, setCollapsed] = useState(false)
return (
  <Layout>

   <Sider 
     theme="light"
     trigger={null}
     collapsible
     collapsed={collapsed} 
     className="sider" ></Sider>
   <Sidebar/>

   <Button 
   type="text"
   icon= {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
   onClick={()=> setCollapsed(!collapsed)}
   className="trigger-btn"
   
   />

   <Layout>
    <Header className="header"></Header>
    <Content className="content"></Content>
   </Layout>

  
</Layout>
)
}

