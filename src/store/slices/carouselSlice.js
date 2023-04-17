import { createSlice } from '@reduxjs/toolkit';
export const carouselSlice= createSlice({
    name: "carousels",
    initialState: {
        carousels: []
    },
    reducers: {
        getCarousels: (state, action) => {
            state.carousels = action.payload;
        }
    }
})
export const { getCarousels } = carouselSlice.actions

export default carouselSlice.reducer
