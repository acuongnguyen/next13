'use client'
import Link from 'next/link';
import { Layout, Menu, theme } from 'antd';
import { useStateValue } from '@/context/StateProvider';
import { fetchCategory, fetchFoodData } from '@/utils/function';
import { useEffect, useState } from 'react';
import Button from './filter/button';
import Filters from './filter/filter';
const { Sider } = Layout;

const AppSider = () => {
    // const stateValues = useStateValue();
    // const [{ categories }, dispatch] = stateValues ? stateValues : [{}, () => { }];
    const [{ categories }, dispatch] = useStateValue();
    const [collapsed, setCollapsed] = useState(false);
    const [filter, setFilter] = useState<string>('');
    const { token: { colorBgContainer } } = theme.useToken();
    const fetchCategory = async () => {
        const apiUrl = `https://vtda.online/api/v1/categories`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            const mappedCategories = data.map((category: any) => ({
                id: category.id,
                name: category.name,
                urlParam: category.id,
                imageUrl: category.imageUrl,
            }));

            dispatch({
                type: "SET_CATEGORY",
                categories: mappedCategories,
            });
        } catch (error) {
            console.log(error);
        }
    };
    console.log('categories ', categories);
    useEffect(() => {
        fetchCategory();
    }, []);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#ffffff' }}>
            <div className="demo-logo-vertical" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        Trang chủ
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href="/blog" style={{ textDecoration: 'none' }}>
                        Blog
                    </Link>
                </Menu.Item>
                <Menu.SubMenu key="sub1" title="Category">
                    {/* <Link href="/category" style={{ textDecoration: 'none' }}>
                        Category
                    </Link> */}
                    <Filters categories={categories} filter={filter} setFilter={setFilter} />

                </Menu.SubMenu>
                {/* <Menu.SubMenu key="sub2" title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="9">
                    <Link href="/#" style={{ textDecoration: 'none' }}>
                        Files
                    </Link>
                </Menu.Item> */}
            </Menu>
        </Sider >
    );
};

export default AppSider;
