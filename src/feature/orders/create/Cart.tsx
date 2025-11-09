import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@src/store/store";
import { fetchCart, removeFromCart, updateCartQuantity } from "@src/store/slices/cartThunks";
import { useRouter } from "next/navigation";

const uid = "1234";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.carts);
  const router = useRouter()

  useEffect(() => {
    dispatch(fetchCart(uid));
  }, [dispatch]);

  const handleQuantityChange = (id: string, value: number) => {
    const newValue = Math.max(1, value);
    dispatch(updateCartQuantity({ itemId: id, quantity: newValue }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart({ itemId: id }));
  };

  const total = items.reduce(
    (sum, item) =>
      sum + item.quantity * (item.product.variants[0].price || 0),
    0
  );

  if (loading) {
    return <div className="p-8 text-gray-600">Đang tải giỏ hàng...</div>;
  }

  return (
    <div className="bg-white rounded-md p-8">
      <h2 className="text-lg font-bold mb-4 text-black-300">Giỏ hàng</h2>

      <table className="w-full text-[14px] border-collapse">
        <thead className="border-b border-gray-200">
          <tr className="bg-white-400 font-semibold">
            <th className="text-left py-4 px-4">Mã</th>
            <th className="text-left py-4 px-4">Tên sản phẩm</th>
            <th className="text-center py-4 px-4 w-24">Số lượng</th>
            <th className="text-center py-4 px-4 w-28">Đơn giá</th>
            <th className="text-left py-4 px-4 w-28">Thành tiền</th>
            <th className="w-6"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-3 px-4">{item.product.variants[0].sku}</td>
              <td className="py-3 px-4 text-gray-700"> {item.product.name} - {item.product.variants[0].productName}</td>
              <td className="py-3 px-4 text-center">
                <input
                  type="text"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-13 h-8 text-center border border-grey-200 rounded-md py-1"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="text"
                  min={1}
                  value={item.product.variants[0].price.toLocaleString("vi-VN")}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-23 h-8 text-center border border-grey-200 rounded-md py-1"
                />
              </td>
              <td className="py-3 px-4 text-left font-medium">
                {(item.product.variants[0].price * item.quantity).toLocaleString("vi-VN")}
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
