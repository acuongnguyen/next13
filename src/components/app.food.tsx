import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FoodItems } from '@/types/backend';
const { Content } = Layout;

const columns1: ColumnsType<FoodItems> = [
    {
        title: 'No',
        dataIndex: 'id',
        rowScope: 'row',
    },
    {
        title: 'Title',
        dataIndex: 'name',
        key: 'title',
        render: (text) => <a>{text}</a>,
        onCell: (_, index) => ({
            colSpan: index === 1 ? 1 : 1,
        }),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'img',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
    },
];

const AppFood = (props: FoodItems) => {
    const { foods } = props;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {/* <div className='title'>BLOG</div> */}
            <Table columns={columns1} dataSource={foods} bordered />
        </div>
    );
};

export default AppFood;