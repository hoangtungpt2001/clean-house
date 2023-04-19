import { createSlice } from '@reduxjs/toolkit';

const addArrticleSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = addArrticleSlice.actions;

export default addArrticleSlice.reducer;