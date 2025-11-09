// src/stores/slices/order/orderSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@src/interfaces/orderTypes";
import { createOrder, deleteOrder, fetchOrder, updateOrder } from "./orderThunks";

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        clearOrder(state) {
            state.items = [];
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        // Fetch order
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.items = [action.payload];
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load order";
            });

        // Create order
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to create order";
            });

        // Update order
        builder
            .addCase(updateOrder.fulfilled, (state, action) => {
                const index = state.items.findIndex((o) => o.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });

        // Delete order
        builder
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.items = state.items.filter((o) => o.id !== action.payload.id);
            });

    },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
