import { CartItem } from "@src/interfaces/cartTypes";
import axiosClient from "./axiosClient";
import { OrderItem } from "@src/interfaces/orderTypes";

export const orderApi = {
  async getCheckout(id: string) {
    try {
      const response = await axiosClient.get(`/orders?id=${id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch checkout:", error);
      throw error;
    }
  },

  async createCheckout(payload: {
    uid: string;
    items: CartItem[];
    customerName: string;
    phone: string;
    channel: string;
    shopName: string;
    orderNote?: string;
    customerNote?: string;
  }) {
    try {
      const response = await axiosClient.post("/orders", payload);
      return response.data;
    } catch (error) {
      console.error("Failed to create checkout:", error);
      throw error;
    }
  },

  async updateCheckout(id: string, payload: Partial<OrderItem>) {
    try {
      const response = await axiosClient.patch(`/orders/${id}`, payload);
      return response.data;
    } catch (error) {
      console.error("Failed to update checkout:", error);
      throw error;
    }
  },

  async deleteCheckout(id: string) {
    try {
      const response = await axiosClient.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to delete checkout:", error);
      throw error;
    }
  },
};