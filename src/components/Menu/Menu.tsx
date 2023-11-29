import { useEffect, useState } from "react";
import Container from '@/components/container/container';
import { FilterFood } from '@/utils/filter';
import Filters from '@/components/filter/filter';
import { useStateValue } from '@/context/StateProvider';
import { fetchCategory, fetchFoodData } from '@/utils/function';

const Menu = ({ title }: { title?: string }) => {
    const [scrollValue, setScrollValue] = useState(0);
    const [{ foodItems, categories }, dispatch] = useStateValue();
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        fetchCategory(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if (!filter && categories && categories.length > 0) {
            setFilter(categories[0].id);
        }
    }, [categories]);


    useEffect(() => {
        // Fetch dữ liệu mỗi khi filter thay đổi
        if (filter) {
            fetchFoodData(dispatch, filter);
        }
    }, [filter, dispatch]);
    return (
        <section className="w-full my-5">
            <Filters categories={categories} filter={filter} setFilter={setFilter} />
            <Container
                scrollOffset={scrollValue}
                col
                items={FilterFood(filter)}
                className="bg-containerbg "
            />
        </section>
    );
};

export default Menu;
