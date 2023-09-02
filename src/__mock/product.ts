import { v4 as uuid } from 'uuid';

export interface productTypes {
    id: string;
    thumbnail: string;
    name: string;
    price: number;
}

export const products: productTypes[] = [
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3804/image.jpg',
        name: 'LẨU CHUA CAY THẬP CẨM',
        price: 506000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3810/image.JPG',
        name: 'LẨU VỊT NẤU CHAO',
        price: 495000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3795/image.jpg',
        name: 'LẨU GÀ TIỀM ỚT HIỂM',
        price: 638000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3785/image.jpg',
        name: 'LẨU CÁ BỚP MĂNG CHUA',
        price: 506000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3791/image.jpg',
        name: 'LẨU CÁ TẦM MĂNG CHUA',
        price: 583000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3899/image.png',
        name: 'LẨU CÁ LĂNG MĂNG CHUA',
        price: 320000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/3799/image.jpg',
        name: 'LẨU NẤM HẢI SẢN - THẢO MỘC/TRUYỀN THỐNG',
        price: 650000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/4176/image.JPG',
        name: 'BAO TỬ HẦM TIÊU XANH',
        price: 638000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/4079/image.jpg',
        name: 'SET HẢI SẢN NHÚNG CAY',
        price: 880000,
    },
    {
        id: uuid(),
        thumbnail:
            '	https://dashboard-api.flyfood.vn/system/product_images/4034/image.jpg',
        name: 'CÁ CHÉP GIÒN NHÚNG CAY',
        price: 880000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/4044/image.jpg',
        name: ' CÁ CHÌNH NHÚNG CAY',
        price: 1089000,
    },
    {
        id: uuid(),
        thumbnail:
            'https://dashboard-api.flyfood.vn/system/product_images/4000/image.jpg',
        name: 'LẨU TÔM SÚ CHUA CAY',
        price: 880000,
    },
];
