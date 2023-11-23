'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import AppTable from '@/components/app.table';
import React, { Fragment, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from '@/components/app.header';
import RootLayout from './layout';
import AppSider from '@/components/app.sider';
import AppHome from '@/components/app.home';
import AppTaskDay from '@/components/app.taskday';
import AppCompany from '@/components/app.company';
import AppPersonal from '@/components/app.personal';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label?: React.ReactNode,
  key?: React.Key,
  href?: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label: href ? <Link href={href}>{label}</Link> : label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', '/', <PieChartOutlined />),
  getItem('Blog', '2', '/blog', <DesktopOutlined />),
  getItem('User', 'sub1', '', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', '', < TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', '/#', <FileOutlined />),
];

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          <AppTaskDay />
          <AppCompany />
          <AppPersonal />
        </div>
      </Content>
    </Layout>
  );
};
export default App;