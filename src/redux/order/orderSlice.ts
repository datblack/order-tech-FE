import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, order_Api } from '../../API';
import notice from '../../utils/notice';
import { resetCartItem } from '../cart/cartSlice';
import { AppDispatch } from '../store';
import { ordersProductTypes } from '../../types';


export const orderProducts = createAsyncThunk(
    'order/orderProducts',
    async ({ data, dispatch }: { data: any, dispatch: AppDispatch }) => {
        let res = await API.post(order_Api, data)
        if (res?.data) {
            notice(true, "Gọi món thành công")
            dispatch(resetCartItem())

        } else {
            notice(false, "Vui lòng thử lại!")
        }
        return res.data;

    }
)
export const getOrderProducts = createAsyncThunk(
    'order/getOrderProducts',
    async () => {
        let res = await API.get(`/orders/${32}`)
        if (res.data.length > 0) {

            return res.data[0]
        }
        else {
            return {
                id: 0,
                order_status: "",
                products: [],
                total_price: 0
            }
        }


    }
)


export interface OrderState {
    isLoading: boolean,
    data: ordersProductTypes
}

const initialState: OrderState = {
    isLoading: false,
    data: {
        id: 0,
        order_status: "",
        products: [],
        total_price: 0

    }
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(orderProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(orderProducts.fulfilled, (state) => {
            state.isLoading = false

        })
        builder.addCase(orderProducts.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getOrderProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getOrderProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload

        })
        builder.addCase(getOrderProducts.rejected, (state) => {
            state.isLoading = false
        })
    },
});


export default orderSlice.reducer;
