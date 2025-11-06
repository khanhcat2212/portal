import React from "react";
import Button from "@src/components/button/Button";
import { ChevronDown } from "lucide-react";
import { productFilterOptions } from "@src/constants/productFilterOptions";

type ProductField = "status" | "createdAt";

interface FilterPopupProps {
  selectedField: ProductField;
  selectedValue: string;
  setSelectedField: (field: any) => void;
  setSelectedValue: (value: string) => void;
  addFilter: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  selectedField,
  selectedValue,
  setSelectedField,
  setSelectedValue,
  addFilter,
}) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div onClick={stopPropagation} className="absolute right-0 top-12 w-[316px] h-[260px] rounded-md shadow-xs bg-white text-[14px] text-black-300 p-8 flex flex-col justify-center">
      <p>Hiển thị tất cả đơn hàng theo:</p>
      <div className="relative h-10 my-2 flex items-center">
        <select
          className="appearance-none w-full border border-grey-200 rounded-md px-4 py-2 pr-8"
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
        >
          <option value="status">Tình trạng sản phẩm</option>
          <option value="createdAt">Ngày được tạo</option>
        </select>
        <ChevronDown
          size={20}
          className="absolute right-2 text-grey-500 pointer-events-none"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
      </div>

      <p>là:</p>
      <div className="relative h-10 mt-2 mb-4 flex items-center">
        <select
          className="appearance-none w-full border border-grey-200 rounded px-4 py-2 pr-8 leading-5"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {productFilterOptions[selectedField].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={20}
          className="absolute right-2 text-grey-500 pointer-events-none z-10"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
      </div>

      <Button variant="primary" size="sm" onClick={addFilter}>
        Thêm điều kiện lọc
      </Button>
    </div>
  );
};

export default FilterPopup;
