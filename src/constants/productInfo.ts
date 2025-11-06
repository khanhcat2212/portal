export interface ProductInfo {
  label: string;
  placeholder: string;
}

export const productInfo: ProductInfo[] = [
  { label: "Tên sản phẩm", placeholder: "Nhập tên sản phẩm" },
  { label: "Kích thước", placeholder: "Nhập kích thước" },
  { label: "Khối lượng (gam)", placeholder: "Nhập khối lượng" },
  { label: "Mã vạch / Barcode", placeholder: "Nhập Barcode" },
  { label: "Mã sản phẩm / SKU", placeholder: "Nhập mã sản phẩm" },
  { label: "Tồn kho", placeholder: "Nhập tồn kho" },
  { label: "Giá gốc (VND)", placeholder: "Nhập giá gốc" },
];
