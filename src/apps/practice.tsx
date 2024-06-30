
import React from "react";
import { Layout, Menu } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import SideMenuList from "src/components/SideMenuList";
import { Outlet } from "react-router-dom";
const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: '100%',
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
  overflow: 'auto'
};

const siderStyle: React.CSSProperties = {

  // textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  height: 'calc(100vh - 64px)'
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};
const { Header, Footer, Sider, Content } = Layout;

const Practice = () => {
  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Sider width="200px" style={siderStyle}>
          <SideMenuList/>
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default Practice;
