import { getUserLoading, getUserSuccess, getUserFailed } from '../slices/userSlice';
import { getAllUserLoading, getAllUserSuccess, getAllUserFailed  } from '../slices/allUserSlice'; 
import axios from "axios";
export const fecthAllUser = () => async dispatch => {
  dispatch(getAllUserLoading());
  try {
    const response = await axios.get('http://localhost:3001/api/users');
    dispatch(getAllUserSuccess(response.data));
  } catch (error) {
    dispatch(getAllUserFailed(error.message));
  }
};

export const fecthUserById = (userId) => async dispatch => {
  dispatch(getUserLoading());
  try {
    const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
    dispatch(getUserSuccess(response.data));
    // console.log("user data: ",response.data );
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};