import { configureStore } from '@reduxjs/toolkit';
import accSlice from './slices/accSlice';
import userSlice from './slices/userSlice';
const store = configureStore({
    reducer: {
        account: accSlice,
        user: userSlice
    }
})
export default store;