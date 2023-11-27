import { FoodItem } from "../types/backend";
import { useStateValue } from "../context/StateProvider";

export const FilterFood = (categoryId: string): FoodItem[] => {

    const [{ foodItems }, dispatch] = useStateValue();

    return foodItems?.filter((item: FoodItem) => item.categoryId === categoryId);
};
