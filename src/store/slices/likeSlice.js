import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    isLiked: false,
    likeCount: 0,
  },
  reducers: {
    toggleLike: (state) => {
      state.isLiked = !state.isLiked;
      if (state.isLiked) {
        state.likeCount += 1;
      } else {
        state.likeCount -= 1;
      }
    },
  },
});
export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer