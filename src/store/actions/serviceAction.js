import { getStatus, getService, getOrders, updateOrderStatus, updateOrderRating,deleteService, updateService,addService, getCategories } from "../slices/serviceSlice";

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
export const createService = (post) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/api/services', post);
    dispatch(addService(response.data));
  } catch (error) {
    throw error;
  }
};
export const editService = (serviceId, service) => async dispatch => {
  try {
    const response = await axios.patch(`http://localhost:3001/api/services/${serviceId}`, service);
    dispatch(updateService(response.data));
  } catch (error) {
    throw error;
  }
};

export const removeService = (serviceId, userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/api/services?id=${serviceId}&userId=${userId}`);
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

export const fecthCatories = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/api/categories');
    dispatch(getCategories(response.data));
  } catch (error) {
     throw error.response;
  }
}
