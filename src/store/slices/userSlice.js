import { createSlice } from '@reduxjs/toolkit';
export const userSlice= createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoading: false,
        error: null,
    },
    reducers: {
        getUserLoading: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },//=>{type: 'user/LoginSucces}
        getUserFailed: (state, action) => {
            state.isLoading = false;
            state.error= action.payload;
        }
    }
})
export const { getUserLoading, getUserSuccess, getUserFailed } = userSlice.actions

export default userSlice.reducer
