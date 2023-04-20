import { getStatus, getService, getOrders, updateOrderStatus, updateOrderRating,deleteService } from "../slices/serviceSlice";
import axios from "axios";

export const fecthStatus = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/statuses');
    dispatch(getStatus(response.data));
  } catch (error) {
     throw error;
  }
};
export const fecthService = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/services');
    dispatch(getService(response.data));
  } catch (error) {
     throw error;
  }
};

export const removeService = (serviceId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/api/services/${serviceId}`);
    dispatch(deleteService(serviceId));
  } catch (error) {
     throw error;
  }
};

export const fecthOrder = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/orders');
    dispatch(getOrders(response.data));
  } catch (error) {
     throw error.response;
  }
};
export const updateOrderStatusId = (orderId, statusId) => async (dispatch) => {
    try {
      await axios.patch(`http://localhost:3001/api/orders/${orderId}`, { statusId });
      dispatch(updateOrderStatus({ orderId, statusId }));
  } catch (error) {
     throw error.response;
  }
};

export const editOrderRating = (orderId, rating) => async (dispatch) => {
    try {
      await axios.patch(`http://localhost:3001/api/orders/${orderId}`, { rating });
      dispatch(updateOrderRating({ orderId, rating }));
  } catch (error) {
    console.log(error)
     throw error.response;
  }
};
