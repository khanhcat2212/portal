import { ChartColumn, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";

export interface AdminRoute {
  label: string;
  path: string;
}

export const adminRoutes: AdminRoute[] = [
  { label: "Thống kê", path: "/admin" },
  { label: "Quản lý sản phẩm", path: "/admin/products" },
  { label: "Thông tin sản phẩm", path: "/admin/products/create" },
  { label: "Quản lý đơn hàng", path: "/admin/orders" },
];
