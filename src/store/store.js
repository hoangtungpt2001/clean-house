import { configureStore } from '@reduxjs/toolkit';
import accSlice from './slices/accSlice';
import userSlice from './slices/userSlice';
import articleSlice from './slices/articleSlice';
import allUserSlice from './slices/allUserSlice';
const store = configureStore({
    reducer: {
        account: accSlice,
        users: allUserSlice,
        user: userSlice,
        articles: articleSlice
    }
})
export default store;