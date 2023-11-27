'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import AppTable from '@/components/app.table';
import React, { Fragment, useState } from 'react';
import {
    ApartmentOutlined,
    FileOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    UserOutlined,
    ShopOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from '@/components/app.header';

const { Sider } = Layout;

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
        label: href ? <Link href={href} style={{ textDecoration: 'none' }}>{label}</Link> : label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '1', '/', <DeploymentUnitOutlined />),
    getItem('Blog', '2', '/blog', <ApartmentOutlined />),
    getItem('Category', 'sub1', '', <ShopOutlined />, [
        getItem('Cá', '9035', '/food'),
        getItem('Gà', '3128', '/food'),
        getItem('Lợn', '5329', '/food'),
    ]),
    getItem('Team', 'sub2', '', < TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', '/#', <FileOutlined />),
];

const AppSider = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#ffffff' }}>
            <div className="demo-logo-vertical" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
};
export default AppSider;