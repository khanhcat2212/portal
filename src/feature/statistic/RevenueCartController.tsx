import { ChartColumn, ChartLine, ChevronDown, Download } from "lucide-react";
import React from "react";

interface ChartProps {
  onDownload?: () => void;
}

const RevenueCartController: React.FC<ChartProps> = ({ onDownload }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-[18px] font-semibold">Doanh thu</p>

      <div className="flex items-center gap-2">
        <div className="flex items-center w-31.5 h-9 bg-white-400 rounded-md border border-grey-600">
          <div
            onClick={onDownload}
            className="w-10.5 flex items-center justify-center border-r border-grey-600 cursor-pointer"
          >
            <Download size={14} />
          </div>
          <div className="w-10.5 flex items-center justify-center">
            <ChartColumn size={14} />
          </div>
          <div className="w-10.5 flex items-center justify-center border-l border-grey-600">
            <ChartLine size={14} />
          </div>
        </div>

        <div className="flex items-center justify-between w-31.5 h-9 px-4 bg-white-400 rounded-md border border-grey-600">
          <span className="text-[.8125rem]">Ngày</span>
          <ChevronDown size={12} className="text-grey-100" />
        </div>
      </div>
    </div>
  );
};

export default RevenueCartController;
