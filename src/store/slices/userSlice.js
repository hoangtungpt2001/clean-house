import { createSlice } from '@reduxjs/toolkit';
export const userSlice= createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoading: false,
        error: null,
        roles: []
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
        },
        getRoles: (state,action) => {
            state.roles = action.payload;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        registerUser: (state , action) =>{
            state.user = action.payload; 
        }

    }
})
export const { getUserLoading, getUserSuccess, getUserFailed,getRoles, updateUser  } = userSlice.actions

export default userSlice.reducer
