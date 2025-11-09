import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderApi } from "@src/api/orderApi";
import { CartItem } from "@src/interfaces/cartTypes";
import { OrderItem } from "@src/interfaces/orderTypes";

// Fetch order by id
export const fetchOrder = createAsyncThunk<OrderItem, string>(
    "orders/fetchOrder",
    async (id) => {
        const response = await orderApi.getCheckout(id);
        return response;
    }
);

// Create new order
export const createOrder = createAsyncThunk<OrderItem, {
    uid: string;
    items: CartItem[];
    customerName: string;
    phone: string;
    channel: string;
    shopName: string;
    orderNote?: string;
    customerNote?: string;
}>(
    "orders/createOrder",
    async (payload) => {
        const response = await orderApi.createCheckout(payload);
        return response;
    }
);

// Update order
export const updateOrder = createAsyncThunk<
    OrderItem,
    { id: string; payload: Partial<OrderItem> }
>(
    "orders/updateOrder",
    async ({ id, payload }) => {
        const response = await orderApi.updateCheckout(id, payload);
        return response;
    }
);


export const deleteOrder = createAsyncThunk<{ id: string }, string>(
    "orders/deleteOrder",
    async (id) => {
        const response = await orderApi.deleteCheckout(id);
        return response;
    }
);
