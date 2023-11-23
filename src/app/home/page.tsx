'use client'

import AppTable from '@/components/app.table';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import useSWR from "swr";
import RootLayout from '../layout';
import AppSider from '@/components/app.sider';
import { Fragment } from 'react';
import Layout from '../layout';

const Home = () => {
    return (
        <>
            <AppSider />
        </>
    )
}
export default Home;