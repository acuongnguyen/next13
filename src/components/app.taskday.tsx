import React from 'react';
import { Layout, theme } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from '@/types/backend';
const { Content } = Layout;
const data: DataType[] = [];
for (let i = 0; i < 33; i++) {
    const currentDate = new Date();
    data.push({
        key: i,
        name: `Target ${i}`,
        age: 22,
        personal: `Personal ${i}`,
        date: currentDate,
        status: `${i < 5 ? "Chưa hoàn thành" : "Đã hoàn thành"}`,
    });
}


const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        width: 10,
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
    },
    {
        title: 'Tên mục tiêu',
        width: 90,
        dataIndex: 'name',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Nhân sự',
        dataIndex: 'personal',
        key: '1',
        width: 30,
    },
    {
        title: 'Thời gian',
        dataIndex: 'date',
        key: '2',
        width: 40,
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: '3',
        width: 50,
        render: (text, record) => {
            const statusColor = record.status === 'Chưa hoàn thành' ? '#e8bc3c' : 'green';
            return <span style={{ color: statusColor }}>{text}</span>;
        },
    },
];

const AppTaskDay = () => {
    return (
        <>
            <Content style={{ margin: '0 0 16px 0' }}>
                <div style={{ fontWeight: '500', color: '#00009e', paddingBottom: '10px' }}>Nhiệm vụ ngày</div>
                <Table columns={columns} dataSource={data} scroll={{ x: 1200, y: 200 }} style={{ boxShadow: '1px 1px 5px #888888', borderRadius: '10px' }} />
            </Content>
        </>
    )
}
export default AppTaskDay;