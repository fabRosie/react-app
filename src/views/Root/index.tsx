import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const items = [
  {
    key: 'menu1',
    label: <Link title='practice' to='/practice'>Practice</Link>
  }
]

 const Root = () => {

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Outlet />
    </Layout>
  )
}
export default Root