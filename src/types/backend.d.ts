interface IBlog {
    id: number,
    content: string,
    author: string,
    title: string
};
interface FoodItem {
    id: number;
    name: string;
    description?: string;
    isPopularFood: boolean;
    price: string;
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    status: string;
    categoryId: string;
};

interface FoodItems {
    items: FoodItem[];
};