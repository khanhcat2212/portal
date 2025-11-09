import { CartItem } from "./cartTypes";

export interface OrderItem {
  id: string;
  cart: CartItem[];
  channel: string;
  shopName: string;
  orderNote: string;
  phone: string;
  customerName: string;
  customerNote: string;
}

export interface OrderState {
  items: OrderItem[];
  loading: boolean;
  error: string | null;
}

export const initialState: OrderState = {
  items: [],
  loading: false,
  error: null,
};