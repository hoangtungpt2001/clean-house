import { getArticle, addPost, getLike, addLike,  removeLike } from '../slices/articleSlice';
import axios from "axios";

export const fecthArticles = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/articles');
    dispatch(getArticle(response.data));
  } catch (error) {
     throw error.response;
  }
};

export const fecthLikes = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/likes');
    // console.log('liek:', response.data)
    dispatch(getLike(response.data));
  } catch (error) {
     throw error.response;
  }
};
export const addLikeApi = (userId, articleId) => async dispatch => {
  try {
    await axios.post('http://localhost:3001/api/likes', { userId, articleId });
    dispatch(addLike(userId, articleId));
  } catch (error) {
     throw error.response;
  }

}

export const removeLikeApi = (userId, articleId) => async dispatch => {
  try {
    await axios.delete(`http://localhost:3001/api/likes?userId=${userId}&articleId=${articleId}`);
    dispatch(removeLike(userId, articleId));
  } catch (error) {
     throw error.response;
  }
}

export const addArticles = (post) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/api/articles', post);
    // console.log('check post: ', response.data)
    dispatch(addPost(response.data));
  } catch (error) {
    throw error.response;
  }
};