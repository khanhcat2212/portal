import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks";
import { ProductState } from "@src/interfaces/productTypes";

const initialState: ProductState = {
  groups: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.groups = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi tải dữ liệu";
      });
  },
});

export default productSlice.reducer;
