import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import settingReducer from './setting/settingSlice';
import cartReducer from './cart/cartSlice';
import orderReducer from "./order/orderSlice"
export const store = configureStore({
    reducer: {
        products: productReducer,
        setting: settingReducer,
        cart: cartReducer,
        order: orderReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;