import React, { useState } from "react";
import { cart as initialItems } from "@src/constants/cart";

const Cart: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (id: string, value: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, value) } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="bg-white rounded-md p-8">
      <h2 className="text-lg font-bold mb-4 text-black-300">Giỏ hàng</h2>

      <table className="w-full text-[14px] border-collapse">
        <thead className="border-b border-gray-200">
          <tr className="bg-white-400 font-semibold">
            <th className="text-left py-4 px-4">Mã</th>
            <th className="text-left py-4 px-4">Tên sản phẩm</th>
            <th className="text-center py-4 px-4 w-24">Số lượng</th>
            <th className="text-right py-4 px-4 w-28">Đơn giá</th>
            <th className="text-right py-4 px-4 w-28">Thành tiền</th>
            <th className="w-6"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 px-4">{item.sku}</td>
              <td className="py-3 px-4 text-gray-700">{item.name}</td>
              <td className="py-3 px-4 text-center">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-12 text-center border rounded-md py-1"
                />
              </td>
              <td className="py-3 px-4 text-right">
                {item.price.toLocaleString("vi-VN")}
              </td>
              <td className="py-3 px-4 text-right font-medium">
                {(item.price * item.quantity).toLocaleString("vi-VN")}
              </td>
              <td
                className="text-center text-gray-400 cursor-pointer hover:text-red-500"
                onClick={() => handleRemove(item.id)}
              >
                ×
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-6 text-sm text-gray-700">
        <div className="w-[250px] space-y-1">
          <div className="flex justify-between">
            <span>Tổng tiền:</span>
            <span>{total.toLocaleString("vi-VN")}</span>
          </div>
          <div className="flex justify-between">
            <span>Giảm giá:</span>
            <span>0</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Khách phải trả:</span>
            <span>{total.toLocaleString("vi-VN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
