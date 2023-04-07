import { createSlice } from "@reduxjs/toolkit";
export const articleSlice= createSlice({
    name: "articles",
    initialState: {
        articles: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        getArticleLoading: (state) => {
            state.isLoading = true;
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false;
            state.articles = action.payload;
        },//=>{type: 'user/LoginSucces}
        getArticleFailed: (state, action) => {
            state.isLoading = false;
            state.error= action.payload;
        }
    }
})
export const { getArticleLoading, getArticleSuccess, getArticleFailed } = articleSlice.actions

export default articleSlice.reducer
