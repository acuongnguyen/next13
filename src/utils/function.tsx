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