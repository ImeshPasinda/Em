import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Space, Avatar, Badge } from 'antd';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AddemployeeScreen from './screens/AddemployeeScreen';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <center><h1 style={{ color: 'white', fontSize: '24px', fontFamily: 'Gilroy' }}>Em</h1></center>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/add-employee">Add Employee</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/nav2">nav 2</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/nav3">nav 3</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ marginLeft: 'auto' }}>
              <Space align="baseline">
                <a href="#">
                  <ClockCircleOutlined style={{ fontSize: '20px', color: '#555', marginRight: '20px' }} />
                </a>
              </Space>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/add-employee" exact element={<AddemployeeScreen />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>

    </BrowserRouter>
  );
};

export default App;
