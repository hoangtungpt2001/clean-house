import { createSlice } from '@reduxjs/toolkit';
export const accSlice= createSlice({
    name: "account",
    initialState: {
        isLogin: false,
        isLoading: false,
        error: null,
        account: {}
    },
    reducers: {
        loginLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        LoginSuccess: (state, action) => {
            state.isLogin = true;
            state.isLoading = false;
            state.error= null;
            state.account = action.payload;
        },//=>{type: 'user/LoginSucces}
        LoginFailed: (state, action) => {
            state.isLoading = false;
            state.error= action.payload ? action.payload : "Unknown Error";
        },
        Logout: (state) => {
            state.isLogin = false;
            state.isLoading = false;
            state.error = null;
            state.account = {};
        }
    }
})
export const { loginLoading, LoginSuccess, LoginFailed, Logout } = accSlice.actions

export default accSlice.reducer
