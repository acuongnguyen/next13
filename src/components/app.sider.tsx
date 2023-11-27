'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import AppTable from '@/components/app.table';
import React, { Fragment, useEffect, useState } from 'react';
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
import { useStateValue } from '@/context/StateProvider';
import { fetchCategory, fetchFoodData } from '@/utils/function';
const { Sider } = Layout;

const AppSider = () => {
    const stateValues = useStateValue();
    const [{ categories }, dispatch] = stateValues ? stateValues : [{}, () => { }];
    useEffect(() => {
        fetchCategory(dispatch);
        console.log('11111111111111');
    }, [dispatch]);
    // const stateValue = useStateValue();
    // const categories = stateValue && stateValue[0] ? stateValue[0].categories : null;
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label?: React.ReactNode,
        key?: React.Key,
        href?: string,
        icon?: React.ReactNode,
        children?: MenuItem[],
        onClick?: (categoryId: string) => void,
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label: href ? (
                <Link href={href} style={{ textDecoration: 'none' }}>{label}</Link>
            ) : (
                <div onClick={() => onClick && onClick(key?.toString())}>{label}</div>
            ),
        } as MenuItem;
    }

    function handleMenuItemClick(categoryId: string) {
        fetchFoodData(dispatch, categoryId);
    }

    const items: MenuItem[] = [
        getItem('Trang chủ', '1', '/', <DeploymentUnitOutlined />),
        getItem('Blog', '2', '/blog', <ApartmentOutlined />),
        getItem('Category', 'sub1', '', <ShopOutlined />, categories ? categories.map((category: any) => (
            getItem(category.name, category.id ? category.id.toString() : '', `/food/${category.id}`, undefined, undefined, handleMenuItemClick)
        )) : []),
        getItem('Team', 'sub2', '', < TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', '/#', <FileOutlined />),
    ];
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#ffffff' }}>
                <div className="demo-logo-vertical" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </>
    );
};
export default AppSider;