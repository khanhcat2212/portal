import React from "react";

interface Props {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductImageUpload: React.FC<Props> = ({ handleImageUpload }) => (
  <div className="w-full rounded-sm bg-white flex flex-col justify-center p-8">
    <p className="text-[1.125rem] font-bold mb-8 text-black-300">Ảnh sản phẩm</p>

    <label
      htmlFor="product-image"
      className="w-full border border-grey-300 rounded-sm flex justify-center items-center h-23.75 cursor-pointer hover:bg-grey-300 transition-colors"
    >
      <span className="text-[.875rem] text-grey-800 font-medium">
        Kéo thả hoặc
        <span className="text-blue-400 pl-1 underline">
          tải ảnh lên từ thiết bị
        </span>
      </span>
    </label>

    <input
      id="product-image"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageUpload}
    />
  </div>
);

export default ProductImageUpload;
