'use client'
import AppTable from '@/components/app.table';
import { Button } from 'react-bootstrap';
import useSWR from "swr";
import RootLayout from '../layout';
import AppSider from '@/components/app.sider';
import { Fragment, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppFood from '@/components/app.food';
const { Header, Content, Footer, Sider } = Layout;
const Food = (props: FoodItems) => {
    const { foods } = props;
    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `https://vtda.online/api/v1/foods/3128`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    console.log("check data =>", data);
    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppFood foods={data} />
        </Layout>
    )
}
export default Food;