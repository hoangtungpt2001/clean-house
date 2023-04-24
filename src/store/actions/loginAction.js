import { loginLoading, LoginSuccess, LoginFailed } from "../slices/accSlice";
import axios from "axios";
const loginApi = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:3001/api/login", {
      username,
      password,
    });
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
export const loginAction = (username, password) => async (dispatch) => {
  try {
    dispatch(loginLoading());
    const data = await loginApi(username, password);
    console.log("check data login: ", data.account.id);
    localStorage.setItem("id", data.account.id);
    dispatch(LoginSuccess(data.account));
  } catch (e) {
    dispatch(LoginFailed(e.error));
    console.log("check error: ", e.error);
  }
};
