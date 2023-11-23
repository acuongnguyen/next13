'use client'
import AppTable from '@/components/app.table';
import { Button } from 'react-bootstrap';
import useSWR from "swr";
import RootLayout from '../layout';
import AppSider from '@/components/app.sider';
import { Fragment } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
interface IProps {
    blogs: IBlog[]
}
const Blog = (props: IProps) => {
    const { blogs } = props;
    const fetcher = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "https://655c79f125b76d9884fd57eb.mockapi.io/api/v1/blogs",
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
            <AppTable blogs={data} />
        </Layout>
    )
}
export default Blog;