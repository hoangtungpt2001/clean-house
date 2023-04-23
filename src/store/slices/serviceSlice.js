import { createSlice } from "@reduxjs/toolkit";
export const serviceSlice= createSlice({
    name: "services",
    initialState: {
        services: [],
        statuses: [],
        orders: [],
        categories: []
    },
    reducers: {
        getStatus: (state, action) => {
            state.statuses = action.payload;
        },
        getService: (state, action) => {
            state.services = action.payload;
        },
        getOrders: (state, action) => {
            state.orders = action.payload;
        },
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        updateOrderStatus: (state, action) => {
        const { orderId, statusId } = action.payload;
        const orderIndex = state.orders.findIndex(order => order.id === orderId);
        if (orderIndex !== -1) {
            state.orders[orderIndex].statusId = statusId;
        }
        },
        updateOrderRating: (state, action) => {
            const { orderId, rating } = action.payload;
            const orderIndex = state.orders.findIndex(order => order.id === orderId);
            if (orderIndex !== -1) {
                state.orders[orderIndex].rating = rating;
            }
        },
        addService: (state, action) => {
            state.services.push(action.payload);
        },
        updateService: (state, action) => {
            const index = state.services.findIndex(
                (service) => service.id === action.payload.id
            );
            state.services[index] = action.payload;
        },
        deleteService: (state, action) => {
            const serviceId = action.payload;
            state.services = state.services.filter(service => service.id !== serviceId);
        },
        getCategories: (state, action) => {
            state.categories = action.payload;
        },
    }
    }
)
export const { getStatus, getService, getOrders, addOrder, updateOrderStatus, updateOrderRating, deleteService, updateService, addService, getCategories } = serviceSlice.actions


export default serviceSlice.reducer
