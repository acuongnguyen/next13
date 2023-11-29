'use client'
import React, { useEffect, useState } from 'react';
import { fetchFoodData } from '@/utils/function';
import AppFood from '@/components/app.food';
import { useStateValue } from '@/context/StateProvider';
import RootLayout from '@/app/layout';
import { theme } from 'antd';
import { useRouter } from 'next/router';

const CategoryPage = () => {
    // const stateValues = useStateValue();
    // const [{ foodItems }, dispatch] = stateValues ? stateValues : [{}, () => { }];
    const [{ foodItems, filter }, dispatch] = useStateValue();
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const { categoryId } = router.query;
    const [foodData, setFoodData] = useState([]);
    console.log('categoryId', filter);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    useEffect(() => {
        fetchFoodData(dispatch, categoryId);
    }, [categoryId, dispatch]);

    return (
        <RootLayout>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <div className='title'>Category Page {filter}</div>
                <AppFood items={foodItems} />
            </div>
        </RootLayout>
    );
};

export default CategoryPage;
