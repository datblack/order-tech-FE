import { createSlice } from '@reduxjs/toolkit';
import { currentProductTypes } from '../../types';

export interface CartState {
    data: currentProductTypes[];
}

const initialState: CartState = {
    data: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            // let cartItemIndex = state.data.findIndex(
            //     (product) => product.id === action.payload.id,
            // );
            // if (cartItemIndex != -1) {
            //     // logic thay thế lại
            //     state.data[cartItemIndex] = action.payload;

            //     //Logic tăng số lượng
            //     // state.data[cartItemIndex].quantity = action.payload.quantity
            //     // if (action.payload.note) {
            //     //     state.data[cartItemIndex].note = action.payload.note
            //     // }
            // } else {
            //     state.data = [...state.data, action.payload];
            // }
            state.data = [...state.data, action.payload];
        },
        increaseQuantity(state, action) {
            let cartItemIndex = state.data.findIndex(
                (product) => product.uuid === action.payload.uuid,
            );
            state.data[cartItemIndex].quantity += 1;
        },
        reduceQuantity(state, action) {
            let cartItemIndex = state.data.findIndex(
                (product) => product.uuid === action.payload.uuid,
            );
            state.data[cartItemIndex].quantity -= 1;
        },
        removeCartItem(state, action) {
            let newCart = state.data.filter(
                (product) => product.uuid !== action.payload.uuid,
            );
            state.data = newCart;
        },
        resetCartItem(state) {
            state.data = []
        }
    },
});

export const { addToCart, increaseQuantity, reduceQuantity, removeCartItem, resetCartItem } =
    cartSlice.actions;

export default cartSlice.reducer;
