import { toggleLike } from '../slices/likeSlice';
import axios from "axios";
export const updateLike = (id) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:3001/api/articles/${id}/like`);
    dispatch(toggleLike(response.data));
    console.log("check data: ",response.data );
  } catch (e) {
    throw e.response.data;
  }
};
