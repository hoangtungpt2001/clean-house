import { getArticleLoading, getArticleSuccess, getArticleFailed  } from '../slices/articleSlice';
import axios from "axios";
export const fecthArticles = () => async dispatch => {
  dispatch(getArticleLoading());
  try {
    const response = await axios.get('http://localhost:3001/api/articles');
    dispatch(getArticleSuccess(response.data));
  } catch (error) {
    dispatch(getArticleFailed(error.message));
  }
};