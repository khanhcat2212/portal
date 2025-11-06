import React from "react";
import { Book } from "lucide-react";

interface Props {
  image: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductDescription: React.FC<Props> = ({ image }) => {
  return (
    <div className="w-[40%] p-8 rounded-md bg-white text-black-300 h-full flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <p className="text-[1.125rem] font-bold text-black-300">Mô tả sản phẩm</p>
        <Book className="text-grey-100 mb-2" size={14} />
      </div>

      <div className="flex-1 flex flex-row items-center justify-center h-full">
        <div className="border border-grey-100 bg-grey-400 w-100 h-100 rounded-md">
          {image && (
            <img
              src={image}
              alt="product_image"
              className="w-100 h-100 object-cover rounded-md border border-grey-200"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
