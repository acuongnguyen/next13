'use client'
import Image from 'next/image'
import styles from './page.module.css';
import Link from 'next/link';
import AppTable from '@/components/app.table';
import React, { Fragment, useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from '@/components/app.header';
import RootLayout from './layout';
import AppSider from '@/components/app.sider';
import AppHome from '@/components/app.home';
import AppTaskDay from '@/components/app.taskday';
import AppCompany from '@/components/app.company';
import AppPersonal from '@/components/app.personal';
import { useStateValue } from '@/context/StateProvider';
import { fetchCategory } from '@/utils/function';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ margin: '0px 16px 50px 16px', overflowY: 'auto' }} className={styles.scrollableContent}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <AppTaskDay />
            <AppCompany />
            <AppPersonal />
          </div>
        </Content>
      </Layout>
    </>
  );
};
export default App;