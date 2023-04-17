import { getCarousels } from "../slices/carouselSlice";
import axios from "axios";
export const fecthCarousesl = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/carousels');
    dispatch(getCarousels(response.data));
  } catch (error) {
     throw error.response.data;
  }
};
