import Input from "@src/components/input/Input";
import React from "react";

const CustomerInfo: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-md p-8">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Thông tin khách hàng
      </p>

      <div className="flex w-full items-center gap-16 justify-between py-3">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Số điện thoại
        </div>
        <Input variant="form" />
      </div>

      <div className="flex w-full items-center gap-16 justify-between py-3">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Tên khách hàng
        </div>
        <Input variant="form" />
      </div>

      <div className="flex w-full items-start gap-16 justify-between py-3">
        <div className="text-[.875rem] mt-2 whitespace-nowrap font-semibold w-25 flex-none">
          Ghi chú khách hàng
        </div>
        <textarea className="border border-grey-500 rounded-lg bg-grey-400 w-full h-25 text-[14px] px-4 py-2" placeholder="Thêm ghi chú" />
      </div>
    </div>
  );
};

export default CustomerInfo;
