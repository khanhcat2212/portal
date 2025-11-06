export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  status: "Còn hàng" | "Hết hàng";
  price: number;
}

export interface ProductGroup {
  id: string;
  name: string;
  status: "Còn hàng" | "Hết hàng";
  variants: ProductVariant[];
}

export const productGroups: ProductGroup[] = [
  {
    id: "p1",
    name: "Áo thun nam mùa đông",
    status: "Còn hàng",
    variants: [
      { id: "v1", name: "M - Đen", sku: "ATNMB001", status: "Còn hàng", price: 500000 },
      { id: "v2", name: "L - Đen", sku: "ATNMB002", status: "Hết hàng", price: 500000 },
      { id: "v3", name: "S - Đen", sku: "ATNMB003", status: "Còn hàng", price: 500000 },
      { id: "v4", name: "XL - Đen", sku: "ATNMB004", status: "Hết hàng", price: 500000 },
    ],
  },
  {
    id: "p2",
    name: "Áo thun nam mùa hè",
    status: "Hết hàng",
    variants: [
      { id: "v5", name: "M - Trắng", sku: "ATNMH001", status: "Hết hàng", price: 450000 },
      { id: "v6", name: "L - Trắng", sku: "ATNMH002", status: "Hết hàng", price: 450000 },
    ],
  },
  {
    id: "p3",
    name: "Áo sơ mi nam công sở",
    status: "Còn hàng",
    variants: [
      { id: "v7", name: "S - Xanh", sku: "ASMN001", status: "Còn hàng", price: 600000 },
      { id: "v8", name: "M - Xanh", sku: "ASMN002", status: "Còn hàng", price: 600000 },
      { id: "v9", name: "L - Xanh", sku: "ASMN003", status: "Hết hàng", price: 600000 },
    ],
  },
  {
    id: "p4",
    name: "Áo khoác dù nam",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
  {
    id: "p5",
    name: "Áo khoác dù nữ",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
  {
    id: "p6",
    name: "Áo T-shirt nam",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
  {
    id: "p7",
    name: "Áo khoác T-shirt nữ",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
  {
    id: "p8",
    name: "Quần nam",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
  {
    id: "p4",
    name: "Quần nữ",
    status: "Còn hàng",
    variants: [
      { id: "v10", name: "M - Đen", sku: "AKDN001", status: "Còn hàng", price: 700000 },
      { id: "v11", name: "L - Đen", sku: "AKDN002", status: "Còn hàng", price: 700000 },
    ],
  },
];
