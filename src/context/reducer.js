export const actionTypes = {
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_FILTER: 'SET_FILTER',
}
const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.SET_FOOD_ITEMS:
            const newFoodItems = action.foodItems;
            const currentFood = state.foodItems ? [...state.foodItems] : [];
            const isItemInCurrentFood = (item) => {
                return currentFood.some((existingItem) => existingItem.id === item.id);
            };
            const updatedFoodItems = newFoodItems.filter((newItem) => !isItemInCurrentFood(newItem));
            localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
            return {
                ...state,
                foodItems: currentFood.concat(updatedFoodItems),
            };
        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                categories: action.categories,
            }
        case actionTypes.SET_FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
}

export default reducer;
