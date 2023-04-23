import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/authAction";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: null,
    account: {},
    user: {},
  },
  extraReducers: (builder) => {
    /* addNewUser */
    // builder.addCase(action.addNewUser.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(action.addNewUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload.userResponse;
    //   state.account = action.payload.accountResponse;
    //   console.log("add user: ", action.payload.userResponse);
    //   console.log("add acc: ", state.account);
    // });
    // builder.addCase(action.addNewUser.rejected, (state, action) => {
    //   state.isError = true;
    // });

    /* addNewAccount */
    builder.addCase(action.addNewAccount.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.addNewAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.account = action.payload;
    });
    builder.addCase(action.addNewAccount.rejected, (state, action) => {
      state.isError = true;
    });
    /* addNewUser */
    builder.addCase(action.addNewUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(action.addNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(action.addNewUser.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
