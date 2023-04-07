import { createSlice } from '@reduxjs/toolkit';
export const allUserSlice= createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        getAllUserLoading: (state) => {
            state.isLoading = true;
        },
        getAllUserSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },//=>{type: 'user/LoginSucces}
        getAllUserFailed: (state, action) => {
            state.isLoading = false;
            state.error= action.payload;
        }
    }
})
export const { getAllUserLoading, getAllUserSuccess, getAllUserFailed } = allUserSlice.actions

export default allUserSlice.reducer
