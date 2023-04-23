import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const addNewUser = createAsyncThunk(
//   "auth/addNewUser",
//   async (data, { rejectWithValue }) => {
//     try {
//       let userResponse = null;
//       let accountResponse = null;
//       // const data = await axios.post("http://localhost:3001/api/users", user);
//       await axios
//         .post("http://localhost:3001/api/users", data.user)
//         .then((response) => {
//           console.log("r", response.data);
//           userResponse = response.data;
//           axios
//             .post("http://localhost:3001/api/accounts", {
//               ...data.account,
//               userId: response.data.id,
//             })
//             .then((response1) => {
//               console.log("r1", response1.data);
//               accountResponse = response1.data;
//             });
//         })
//         .catch((err) => {
//           rejectWithValue(err.messages);
//         });
//       return { userResponse, accountResponse };
//     } catch (error) {
//       return rejectWithValue(error.messages);
//     }
//   }
// );
export const addNewAccount = createAsyncThunk(
  "auth/addNewAccount",
  async (account, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        "http://localhost:3001/api/accounts",
        account
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error.messages);
    }
  }
);
export const addNewUser = createAsyncThunk(
  "auth/addNewUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        "http://localhost:3001/api/users",
        user
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error.messages);
    }
  }
);
