import React from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import Link from 'next/link';
const { Header } = Layout;

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

const AppHeader = () => {
    return (
        <Header style={{ maxHeight: '10vh', backgroundColor: '#ffffff' }}>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                <Link href={"/"} className="navbar-brand">MYS</Link>

                <Menu.Item key="2">Sản phẩm</Menu.Item>
                <Menu.Item key="3">Giới thiệu</Menu.Item>
                <Menu.Item key="4">Search</Menu.Item>
                {/* Thêm các Menu.Item khác nếu cần */}
            </Menu>
        </Header >
    );
};

export default AppHeader;
