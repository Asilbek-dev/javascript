import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  MenuOutlined,
  HeartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (

      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="menu">
        <div className="logo menu" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className="menu">
          <Menu.Item key="1">
            <img src="../images/logo.png" className="image"/>
          </Menu.Item>
          <SubMenu style={{ padding: 0 }} key="sub1" icon={<FileTextOutlined />} title="Pages">
            <Menu.Item key="3">Start Page</Menu.Item>
            <Menu.Item key="3">Login</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <span className="site-layout-background">{React.createElement(this.state.collapsed ? MenuOutlined : MenuOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </span>
          <span style={{ marginBottom: 0 }} className="search">
            <Input addonAfter={<SearchOutlined />} placeholder="Search..." />
          </span>
        </Header>
        <Content>Start Page</Content>
        <Footer>© 2019 - 2020 Stexo - Crafted with <HeartOutlined /> by Themesdesign.</Footer>
      </Layout>
    </Layout>

    );
  }
}
App.propTypes = {}
export default App