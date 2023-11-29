export type IBlog = {
    id: number,
    content: string,
    author: string,
    title: string
};

export type IProps = {
    blogs: IBlog[]
}

export type FoodItem = {
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
export type FoodItems = {
    foods: FoodItem[];
};

export type DataType = {
    key: React.Key;
    name: string;
    age?: number;
    personal: string;
    date: Date;
    status?: string;
    progress?: number;
};

export type FoodCategory = {
    map(arg0: (category: any) => import("react").JSX.Element): unknown;
    id: number;
    name: string;
    urlParam: string;
    imageUrl: string;
};

export type FoodCategories = FoodCategory[];