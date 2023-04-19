import { createSlice } from "@reduxjs/toolkit";
export const articleSlice= createSlice({
    name: "articles",
    initialState: {
        articles: [],
        likes: []
    },
    reducers: {
        getArticle: (state, action) => {
            state.articles = action.payload;
        },
        addPost: (state, action) => {
        state.articles.push(action.payload);
        },
        getLike: (state, action) => {
            state.likes= action.payload;
        },
        addLike: (state, action) => {
            state.likes.push(action.payload)
        },
        removeLike: (state, action) => {
            state.likes = state.likes.filter(like => like.articleId !== action.payload.articleId || like.userId !== action.payload.userId)
        }
        }
    }
)
export const { getArticle, addPost, getLike, addLike,  removeLike } = articleSlice.actions

export default articleSlice.reducer
