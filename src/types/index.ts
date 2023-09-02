export interface dataProductByCategory {
    category_id: number;
    category_name: string;
    product_response_list: any[];
}
export interface productTypes {
    id: string;
    thumbnail: string;
    description: string;
    complete_time: number;
    name: string;
    category_id: number;
    image: {};
    price: {};
    status: string;
}
export interface currentProductTypes {
    id: number;
    uuid?: number;
    name: string;
    description: string;
    complete_time: number;
    category_id: number;
    thumbnail: string;
    price: { name: string; value: number }[];
    image: string[];
    status: string;
    quantity?: any;
    note?: string;
}
export interface ordersProductTypes {
    id: number
    order_status: string
    products: currentProductTypes[]
    total_price: number
}