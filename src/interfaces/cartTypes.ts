import { ProductGroup } from "./productTypes";

export interface CartItem {
    id: string;
    product: ProductGroup
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    loading: boolean;
    error: string | null;
}

export const initialState: CartState = {
    items: [],
    loading: false,
    error: null,
};