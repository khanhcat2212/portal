import Input from "@src/components/input/Input";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const OrderInfo = () => {
  const [channel, setChannel] = useState("");
  const [shop, setShop] = useState("");
  return (
    <div className="w-full bg-white rounded-md p-8">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Thông tin đơn hàng
      </p>

      <div className="flex w-full items-center gap-16 justify-between py-3">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Mã đơn hàng
        </div>
        <Input variant="form" />
      </div>

      <div className="flex w-full items-center gap-16 justify-between py-2">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Kênh bán hàng
        </div>
        <div className="relative w-full">
          <select
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="w-full appearance-none border border-grey-600 rounded-md px-3 py-2 text-[.875rem] bg-gray-50 leading-6"
          >
            <option value="shopee">Shopee</option>
            <option value="lazada">Lazada</option>
          </select>
          <ChevronDown
            size={20}
            className="absolute right-2 text-grey-500 pointer-events-none z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-16 justify-between py-2">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Tên shop
        </div>
        <div className="relative w-full">
          <select
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className="w-full appearance-none border border-grey-600 rounded-md px-3 py-2 text-[.875rem] bg-gray-50 leading-6"
          >
            <option value="cosmetic">Cửa hàng Mỹ phẩm</option>
            <option value="fashio">Cửa hàng Thoi trang</option>
          </select>
          <ChevronDown
            size={20}
            className="absolute right-2 text-grey-500 pointer-events-none z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
      </div>

      <div className="flex w-full items-start gap-16 justify-between py-3">
        <div className="text-[.875rem] mt-2 whitespace-nowrap font-semibold w-25 flex-none">
          Ghi chú đơn hàng
        </div>
        <textarea className="border border-grey-500 rounded-lg bg-grey-400 w-full h-25 text-[14px] px-4 py-2" placeholder="Thêm ghi chú" />
      </div>
    </div>
  );
};

export default OrderInfo;
