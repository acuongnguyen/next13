import { FoodCategories, FoodCategory } from "@/types/backend";
import { setCategories } from "./categories";

export const fetchFoodData = async (dispatch: any, categoryId: string) => {
    const apiUrl = `https://vtda.online/api/v1/foods/${categoryId}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({
            type: "SET_FOOD_ITEMS",
            foodItems: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const fetchCategory = async (dispatch: any) => {
    const apiUrl = `https://vtda.online/api/v1/categories`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const mappedCategories: FoodCategories = data.map(
            (category: FoodCategory) => {
                return {
                    id: category.id,
                    name: category.name,
                    urlParam: category.id,
                    imageUrl: category.imageUrl,
                };
            }
        );
        console.log('data', data);
        setCategories(mappedCategories);
        dispatch({
            type: "SET_CATEGORY",
            categories: mappedCategories,
        });
    } catch (error) {
        console.log(error);
    }
};