// import React, { useState } from 'react';
// import { Layout, theme } from 'antd';
// import { Table } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { FoodItem } from '@/types/backend';
// const { Content } = Layout;

// const columns1: ColumnsType<FoodItem> = [
//     {
//         title: 'No',
//         dataIndex: 'id',
//         rowScope: 'row',
//     },
//     {
//         title: 'Title',
//         dataIndex: 'name',
//         key: 'title',
//         render: (text) => <a>{text}</a>,
//         onCell: (_, index) => ({
//             colSpan: index === 1 ? 1 : 1,
//         }),
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'img',
//         dataIndex: 'imageUrl',
//         key: 'imageUrl',
//     },
// ];

// const AppFood = ({ items }: { items: FoodItem[] }) => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
//             {/* <div className='title'>BLOG</div> */}
//             <Table columns={columns1} dataSource={items} bordered />
//         </div>
//     );
// };

// export default AppFood;

import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { FoodItem } from '@/types/backend';
import { SingleFoodItem } from '@/components/FoodItem/FoodItem';

const { Content } = Layout;

const AppFood = ({ items }: { items: FoodItem[] }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {items && items.map((item: FoodItem) => (
                <SingleFoodItem key={item.id} item={item} col={false} />
            ))}
            {
                !items && (
                    <div>Loading...</div>
                )
            }
            {
                items && items.length <= 0 && (
                    <div>No Food Items Available</div>
                )
            }
        </div>
    );
};

export default AppFood;
