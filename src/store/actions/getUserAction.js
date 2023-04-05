import { getUserLoading, getUserSuccess, getUserFailed } from '../slices/userSlice';
import axios from "axios";
export const fecthUserById = (userId) => async dispatch => {
  dispatch(getUserLoading());
  try {
    const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
    dispatch(getUserSuccess(response.data));
    console.log("user data: ",response.data );
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};