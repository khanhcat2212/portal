export interface ProductRaw {
    id: string;
    groupId: string;
    groupName: string;
    productName: string;
    sku: string;
    groupStatus: string;
    variantStatus: string;
    price: number;
}

export interface ProductVariant {
    id: string;
    productName: string;
    sku: string;
    variantStatus: string;
    price: number;
}

export interface ProductGroup {
    id: string;
    name: string;
    status: string;
    variants: ProductVariant[];
}

export interface ProductState {
    groups: ProductGroup[];
    loading: boolean;
    error: string | null;
}
