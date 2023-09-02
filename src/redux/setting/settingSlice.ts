import { createSlice } from '@reduxjs/toolkit';
export interface SettingState {
    isShowProductDetail: boolean;
    isShowCart: boolean;
    isShowOrder: boolean;
    isShowSupport: boolean;
}

const initialState: SettingState = {
    isShowProductDetail: false,
    isShowCart: false,
    isShowOrder: false,
    isShowSupport: false,
};

export const settingSlice = createSlice({
    name: 'Setting',
    initialState,
    reducers: {
        setShowProductDetail: (state, actions) => {
            state.isShowProductDetail = actions.payload;
        },
        setShowCart: (state, actions) => {
            state.isShowCart = actions.payload;
        },
        setShowOrder: (state, actions) => {
            state.isShowOrder = actions.payload;
        },
        setShowSupport: (state, actions) => {
            state.isShowSupport = actions.payload;
        },
    },
});

export const {
    setShowProductDetail,
    setShowCart,
    setShowOrder,
    setShowSupport,
} = settingSlice.actions;

export default settingSlice.reducer;
