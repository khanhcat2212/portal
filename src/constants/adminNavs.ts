import { ChartColumn, ShoppingBag, ShoppingCart } from "lucide-react";
export interface AdminNav {
  label: string;
  icon: typeof ChartColumn;
  path: string;
}

export const adminNavs: AdminNav[] = [
  { label: "Thống kê", path: "/admin", icon: ChartColumn },
  { label: "Quản lý sản phẩm", path: "/admin/products", icon: ShoppingBag },
  { label: "Quản lý đơn hàng", path: "/admin/orders", icon: ShoppingCart  },
];
