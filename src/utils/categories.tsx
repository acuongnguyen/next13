import { FoodCategories } from '../types/backend';
export let Categories: FoodCategories = [];
export const setCategories = (newCategories: FoodCategories) => {
    Categories = newCategories;
};