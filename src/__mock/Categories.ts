import { v4 as uuid } from 'uuid';

export interface categoryType {
    id: string;
    cover: string;
    name: string;
}

const categories: categoryType[] = [
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/4014/image.jpg',
        name: 'MÓN GÀ',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/3860/image.jpg',
        name: 'MÓN CÁ - TÔM',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/3733/image.jpg',
        name: 'MÓN BÒ - DÊ - HEO',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/4163/image.jpg',
        name: 'MÓN KHAI VỊ',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/3654/image.jpg',
        name: ' MÓN GỎI',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/3833/image.jpg',
        name: 'MÓN CƠM - SÚP',
    },
    {
        id: uuid(),
        cover: 'https://dashboard-api.flyfood.vn/system/product_images/3899/image.png',
        name: 'MÓN LẨU',
    },
];

export default categories;
