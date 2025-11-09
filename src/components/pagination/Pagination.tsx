import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  visiblePages: number[];
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, visiblePages, onChangePage }) => {
  return (
    <div className="flex justify-end items-center gap-2 mt-6 text-[13px]">
      <button
        className="px-3 py-1 rounded-lg disabled:opacity-50"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={24} className="text-grey-900 hover:text-blue-500" />
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer text-grey-900 ${
            currentPage === page ? "bg-primary-gradient text-white" : "hover:text-blue-500"
          }`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="px-3 py-1 disabled:opacity-50"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={24} className="text-grey-900 hover:text-blue-500" />
      </button>
    </div>
  );
};

export default Pagination;
