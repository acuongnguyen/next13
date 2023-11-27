'use client'
import AppTable from '@/components/app.table';
import { Button } from 'react-bootstrap';
import useSWR from "swr";
import styles from '../page.module.css';
import RootLayout from '../layout';
import AppSider from '@/components/app.sider';
import { Fragment } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { IProps } from '../../types/backend';
const { Header, Content, Footer, Sider } = Layout;
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
        <Layout>
            <Content style={{ margin: '0 16px' }} className={styles.scrollableContent} >
                <AppTable blogs={data} />
            </Content>
        </Layout>
    )
}
export default Blog;