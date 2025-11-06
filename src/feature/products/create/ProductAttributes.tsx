import React from "react";
import Input from "@src/components/input/Input";
import Button from "@src/components/button/Button";
import { Trash } from "lucide-react";

const ProductAttributes: React.FC = () => {
  const attributes = ["Thương hiệu", "Xuất xứ", "Chất liệu"];

  return (
    <div className="w-[40%] py-8 px-8 rounded-md bg-white h-full overflow-y-auto">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Thuộc tính sản phẩm
      </p>

      {attributes.map((attr, idx) => (
        <div key={idx} className="flex w-full items-center gap-8 my-4">
          <label className="text-[.875rem] w-24 shrink-0 whitespace-nowrap">
            {attr}
          </label>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Input variant="form" onChange={(e) => e.target.value} />
              <Trash
                className="text-grey-900 cursor-pointer hover:scale-[1.03] transition-all"
                size={20}
              />
            </div>
          </div>
        </div>
      ))}

      <Button variant="primary" size="sm" className="mt-8">
        Thêm thuộc tính
      </Button>
    </div>
  );
};

export default ProductAttributes;
