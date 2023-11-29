import { motion } from "framer-motion";
import Button from "./button";
import { Categories } from "../../utils/categories";
import { FoodCategory } from '@/types/backend';
import { useStateValue } from "../../context/StateProvider";
import { Menu } from "antd";

const Filters = ({ categories, filter, setFilter }: { categories: FoodCategory, filter: string, setFilter: any }) => {
    const [{ }, dispatch] = useStateValue();

    if (!categories) {
        return null;
    }

    return (
        <>
            {categories?.map((category: any) => (
                <Menu.Item key={category.id}>
                    <Button key={category.id} category={category} filter={filter} setFilter={setFilter} dispatch={dispatch} />
                </Menu.Item>
            ))}
        </>
    );
};



export default Filters;
