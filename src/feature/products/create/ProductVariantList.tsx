import Input from "@src/components/input/Input";
import { productVariants } from "@src/constants/productVariants";
import React from "react";

const ProductVariantList = () => {
  return (
    <div className="w-full">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Danh sách phân loại sản phẩm
      </p>

      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="pb-3 font-semibold w-1/4">Màu sắc</th>
            <th className="pb-3 font-semibold w-1/4">Kích thước</th>
            <th className="pb-3 font-semibold w-1/4">Tổng tồn kho</th>
            <th className="pb-3 font-semibold w-1/4">Tồn kho của shop</th>
          </tr>
        </thead>
        <tbody>
          {productVariants.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 hover:bg-gray-50 transition-all"
            >
              <td className="py-3 px-2">{item.color}</td>
              <td className="py-3 px-8">{item.size}</td>
              <td className="py-3">
                <input
                  type="text"
                  className="border border-grey-200 focus:outline-none focus:ring-0 p-2 w-20 text-center flex rounded-md"
                  defaultValue={item.totalStock}
                />
              </td>
              <td className="py-3 px-6">
                <input
                  type="text"
                  className="border border-grey-200 focus:outline-none focus:ring-0 p-2 w-20 text-center flex rounded-md"
                  defaultValue={item.shopStock}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductVariantList;
