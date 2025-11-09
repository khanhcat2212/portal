import React from "react";
import { X } from "lucide-react";

interface Props {
  filter: { field: string; value: string };
  onRemove: () => void;
}

const ActiveFilterBadge: React.FC<Props> = ({ filter, onRemove }) => {
  return (
    <div className="w-fit rounded-sm bg-grey-300 p-2 text-[.75rem] text-grey-800 flex items-center justify-between gap-4">
      {`${filter.field === "status" ? "Tình trạng sản phẩm" : "Ngày tạo"}: ${filter.value}`}
      <div
        onClick={onRemove}
        className="w-5 h-5 rounded-md bg-grey-200 flex items-center justify-center hover:scale-[1.2] transition-all cursor-pointer"
      >
        <X className="text-grey-500" size={12} />
      </div>
    </div>
  );
};

export default ActiveFilterBadge;
