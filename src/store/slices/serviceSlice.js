import { createSlice } from "@reduxjs/toolkit";
export const serviceSlice= createSlice({
    name: "services",
    initialState: {
        services: [],
        statuses: [],
        orders: []
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
         deleteService: (state, action) => {
            const index = state.services.findIndex(service => service.id === action.payload);
            if (index !== -1) {
                state.services.splice(index, 1);
            }
        }
    }
    }
)
export const { getStatus, getService, getOrders, updateOrderStatus,updateOrderRating,deleteService } = serviceSlice.actions

export default serviceSlice.reducer
