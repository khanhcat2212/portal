/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "./axiosClient";

export const productApi = {
  async getAll() {
    try {
      const response = await axiosClient.get("/products");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },

  async getById(id: string) {
    try {
      const response = await axiosClient.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      throw error;
    }
  },

  async create(payload: any) {
    try {
      const response = await axiosClient.post("/products", payload);
      return response.data;
    } catch (error) {
      console.error("Failed to create product:", error);
      throw error;
    }
  },
};
