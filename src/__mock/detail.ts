import { v4 as uuid } from 'uuid';
interface detailTypes {
    id: string;
    name: string;
    code: number;
    description: string;
    images: { id: string; url: string; name: string }[];
}

const detail: detailTypes = {
    id: uuid(),
    name: 'LẨU SƯỜN BÊ NẤU RƯỢU HOA TIÊU',
    code: 5012,
    description: `
  Size (M): 1kg2 sườn bê, 5-6 người dùng.
   Nước lẩu: vị cay nhẹ và ngọt dịu giống vị lẩu Tứ Xuyên (thành phần nước lẩu có rượu hoa tiêu, nước cốt gà, gừng, xả, ớt sừng, tỏi, hành tím, ớt trái khô)
 `,
    images: [
        {
            id: uuid(),
            url: '	https://dashboard-api.flyfood.vn/system/product_images/4086/image.jpg',
            name: '',
        },
        {
            id: uuid(),
            url: 'https://dashboard-api.flyfood.vn/system/product_images/4087/image.jpg',
            name: '',
        },
        {
            id: uuid(),
            url: 'https://dashboard-api.flyfood.vn/system/product_images/4088/image.jpg',
            name: '',
        },
        {
            id: uuid(),
            url: 'https://dashboard-api.flyfood.vn/system/product_images/4089/image.jpg',
            name: '',
        },
        {
            id: uuid(),
            url: '	https://dashboard-api.flyfood.vn/system/product_images/4090/image.jpg',
            name: '',
        },
        {
            id: uuid(),
            url: '	https://dashboard-api.flyfood.vn/system/product_images/4091/image.jpg',
            name: '',
        },
    ],
};

export default detail;
