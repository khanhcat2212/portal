import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartApi } from "@src/api/cartApi";
import { CartItem } from "@src/interfaces/cartTypes";
import { ProductGroup, ProductVariant } from "@src/interfaces/productTypes";

export const fetchCart = createAsyncThunk<CartItem[], string>(
  "cart/fetchCart",
  async (uid) => {
    const response = await cartApi.getCart(uid);
    return response;
  }
);

export const addToCart = createAsyncThunk<
  CartItem,
  { uid: string; product: ProductGroup }
>("cart/addToCart", async ({ uid, product }) => {
  const response = await cartApi.addToCart(uid,product);
  return response;
});

export const updateCartQuantity = createAsyncThunk<
  CartItem,
  { itemId: string; quantity: number }
>("cart/updateCartQuantity", async ({ itemId, quantity }) => {
  const response = await cartApi.updateQuantity(itemId, quantity);
  return response;
});

export const removeFromCart = createAsyncThunk<
  { id: string },
  { itemId: string }
>("cart/removeFromCart", async ({ itemId }) => {
  const response = await cartApi.removeFromCart(itemId);
  return response;
});

