import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@src/interfaces/cartTypes";
import { addToCart, fetchCart, removeFromCart, updateCartQuantity } from "./cartThunks";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load cart";
      });

    // Add
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const existing = state.items.find(
        (i) => i.product.id === action.payload.product.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    });

    builder.addCase(updateCartQuantity.fulfilled, (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    });

    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;