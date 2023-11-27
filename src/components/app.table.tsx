import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProps } from '@/types/backend';
const { Content } = Layout;

const columns1: ColumnsType<IProps> = [
    {
        title: 'No',
        dataIndex: 'id',
        rowScope: 'row',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
        onCell: (_, index) => ({
            colSpan: index === 1 ? 1 : 1,
        }),
    },
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
    },
];

const AppTable = (props: IProps) => {
    const { blogs } = props;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <div className='title'>BLOG</div>
            <Table columns={columns1} dataSource={blogs} bordered />
        </div>
    );
};

export default AppTable;