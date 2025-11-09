import React, { useState } from "react";
import Input from "@src/components/input/Input";
import { ChevronDown } from "lucide-react";
import { productInfo } from "@src/constants/productInfo";

interface Props {
  status: string;
  setStatus: (val: string) => void;
}

const ProductGeneralInfo: React.FC<Props> = ({ status, setStatus }) => {
  const [size, setSize] = useState("");

  return (
    <div className="w-[60%] py-8 px-8 rounded-md bg-white h-full">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Thông tin chung
      </p>

      {productInfo.map((info, idx) => (
        <div
          key={idx}
          className="flex w-full items-center gap-16 justify-between py-3"
        >
          <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
            {info.label}
          </div>
          <Input variant="form" placeholder={info.placeholder} />
        </div>
      ))}

      <div className="flex w-full items-center gap-16 justify-between py-3">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Danh mục
        </div>
        <div className="relative w-full">
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full appearance-none border border-grey-600 rounded-md px-3 py-2 text-[.875rem] bg-gray-50 leading-6"
          >
            <option value="men">Thời trang nam</option>
            <option value="women">Thời trang nữ</option>
          </select>
          <ChevronDown
            size={20}
            className="absolute right-2 text-grey-500 pointer-events-none z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-16 py-3">
        <div className="text-[.875rem] whitespace-nowrap font-semibold w-25 flex-none">
          Trạng thái
        </div>
        <div className="flex items-center gap-8">
          <label className="flex items-center gap-2 text-[.875rem]">
            <input
              type="radio"
              name="status"
              value="allowed"
              checked={status === "allowed"}
              onChange={() => setStatus("allowed")}
            />
            Được phép bán
          </label>
          <label className="flex items-center gap-2 text-[.875rem]">
            <input
              type="radio"
              name="status"
              value="not_allowed"
              checked={status === "not_allowed"}
              onChange={() => setStatus("not_allowed")}
            />
            Chưa được phép bán
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductGeneralInfo;
