import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";
import { orders } from "@src/constants/orders";
import { ChevronDown, Filter, Plus } from "lucide-react";
import React from "react";

const RecentOrderTable: React.FC = () => {
  return (
    <div className="px-4 py-6 rounded-sm bg-white h-119.5">
      <span className="text-5 font-semibold mb-6">Đơn hàng gần đây</span>

      <div className="flex items-center justify-between gap-2">
        <Input variant="outline" placeholder="Tìm kiếm" withIcon />
        <div className="bg-grey-300 rounded-md flex items-center justify-center gap-2">
          <Filter size={14} />
          <span className="text-[.8125rem]">Thêm điều kiện lọc</span>
          <ChevronDown size={14} />
        </div>

        <Button variant="primary" size="sm">
          <div className="flex items-center gap-2">
            <Plus className="text-white text-[1.125rem]" />
            <span className="text-white text-[.8125rem]">Tạo sản phẩm</span>
          </div>
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-lg border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-4 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-4 font-semibold">Mã sản phẩm / SKU</th>
              <th className="p-4 font-semibold">Tên sản phẩm</th>
              <th className="p-4 font-semibold">Tình trạng</th>
              <th className="p-4 font-semibold">Ngày tạo</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, idx) => (
              <tr key={order.id} className="border-t hover:bg-slate-50">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.name}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4">{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 rounded-lg border">〈</button>

        <button className="px-3 py-1 rounded-lg bg-sky-500 text-white">
          1
        </button>
        <button className="px-3 py-1 rounded-lg border">2</button>
        <button className="px-3 py-1 rounded-lg border">3</button>
        <button className="px-3 py-1 rounded-lg border">4</button>
        <button className="px-3 py-1 rounded-lg border">5</button>

        <button className="px-3 py-1 rounded-lg border">〉</button>
      </div>
    </div>
  );
};

export default RecentOrderTable;
