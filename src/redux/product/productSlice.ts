import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, getAllProducts_Api } from '../../API';
import { currentProductTypes, dataProductByCategory } from '../../types';

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await API.get(getAllProducts_Api);
        if (response?.data?.length >= 0) {
            return response;
        }
    },
);

interface productState {
    isLoading: boolean;
    data: dataProductByCategory[];
    currentProduct: currentProductTypes;
}

const initialState: productState = {
    isLoading: false,
    data: [],
    currentProduct: {
        id: 0,
        name: '',
        description: '',
        complete_time: 0,
        category_id: 0,
        price: [{ name: '', value: 0 }],
        image: [],
        thumbnail: '',
        status: '',
    },
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentProduct(state, action) {
            state.currentProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, actions) => {
            state.data = actions.payload?.data;
            state.isLoading = false;
        });
        builder.addCase(getAllProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});
export const { setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
