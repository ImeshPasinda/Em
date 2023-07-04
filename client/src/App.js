import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  TeamOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Space, Avatar, Badge } from 'antd';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AddemployeeScreen from './screens/AddemployeeScreen';
import EmployeestableScreen from './screens/EmployeestableScreen';
import HomeScreen from './screens/HomeScreen';

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
          <center><Link to="/">
            <h1 style={{ color: 'white', fontSize: '24px', fontFamily: 'Gilroy' }}>Em</h1>
          </Link>
          </center>

          <Menu
            theme="dark"
            mode="inline"

          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/add-employee">Add Employee</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <Link to="/employee-table">Employee Table</Link>
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
              <Route path="/" element={<HomeScreen />} />
              <Route path="/add-employee" exact element={<AddemployeeScreen />} />
              <Route path="/employee-table" exact element={<EmployeestableScreen />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>

    </BrowserRouter>
  );
};

export default App;
