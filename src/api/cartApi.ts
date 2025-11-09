import { ProductGroup, ProductVariant } from "@src/interfaces/productTypes";
import axiosClient from "./axiosClient";

export const cartApi = {
  async getCart(uid: string) {
    try {
      const response = await axiosClient.get(`/carts?uid=${uid}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      throw error;
    }
  },

  async addToCart(uid: string, product: ProductGroup) {
    try {
      const response = await axiosClient.post(`/carts`, {
        uid,
        product,
        quantity: 1,
      });
      return response.data;
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  },

  async updateQuantity(itemId: string, quantity: number) {
    try {
      const response = await axiosClient.patch(`/carts/${itemId}`, { quantity });
      return response.data;
    } catch (error) {
      console.error("Failed to update cart item quantity:", error);
      throw error;
    }
  },

  async removeFromCart(itemId: string) {
    try {
      const response = await axiosClient.delete(`/carts/${itemId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to remove cart item:", error);
      throw error;
    }
  },
};
