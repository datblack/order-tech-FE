import { v4 as uuid } from 'uuid';
export interface MenuTypes {
    id: string;
    name: string;
    icon: string;
}

export const menu: MenuTypes[] = [
    { id: uuid(), name: 'Giỏ hàng', icon: 'cart' },
    { id: uuid(), name: 'Đơn hàng', icon: 'order' },
    { id: uuid(), name: 'Hỗ trợ', icon: 'help' },
];
