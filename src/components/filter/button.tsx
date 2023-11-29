import { motion } from "framer-motion";
import { FoodCategory } from '@/types/backend';
import Link from "next/link";
const Button = ({
    category,
    filter,
    setFilter,
    dispatch,
}: {
    category: FoodCategory;
    filter: string;
    setFilter: any;
    dispatch: any;
}) => {
    const isActive = category.urlParam;
    console.log('filter button', filter);
    return (
        <motion.div
            onClick={() => {
                setFilter(category.id);
                dispatch({
                    type: 'SET_FILTER',
                    filter: category.id,
                });
            }}
            whileTap={{ scale: 1.1 }}
            className={`group ${isActive ? "bg-cartNumBg" : "bg-btnOverlay hover:bg-cartNumBg"} w-24 min-w-[6rem] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-out`}
        >
            <Link href={`/food/${category.id}`} passHref style={{ textDecoration: 'none' }}>
                {category.name}
            </Link>
        </motion.div>
    );
};

export default Button;
