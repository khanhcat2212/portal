import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@src/store/slices/productSlice";
import cartReducer from "@src/store/slices/cartSlice";
import orderReducer from "@src/store/slices/orderSlice";
import navReducer from "@src/store/slices/navSlice";
import sidebarReducer from "@src/store/slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
    orders: orderReducer,
    navs: navReducer,
    sidebar: sidebarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
