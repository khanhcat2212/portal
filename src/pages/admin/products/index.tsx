import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";
import { products } from "@src/constants/products";
import AdminLayout from "@src/layout/adminLayout";
import { ChevronDown, ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react";
import React, { useMemo, useState } from "react";

const Products: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProducts = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    if (!kw) return products;
    const normalize = (str: string) =>
      str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    return products.filter((o) => {
      const id = normalize(o.id);
      const name = normalize(o.name);
      const status = normalize(o.status);
      const k = normalize(keyword);
      return id.includes(k) || name.includes(k) || status.includes(k);
    });
  }, [keyword]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pagesPerBlock = 5;

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentBlock = Math.ceil(currentPage / pagesPerBlock);
  const startPage = (currentBlock - 1) * pagesPerBlock + 1;
  const endPage = Math.min(currentBlock * pagesPerBlock, totalPages);

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }
  return (
    <AdminLayout>
      <div className="w-full h-[468px] bg-white rounded-sm py-4 px-5">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex-1">
            <Input
              variant="outline"
              placeholder="Tìm kiếm"
              withIcon
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="bg-grey-300 rounded-md flex items-center justify-center gap-2 w-45 h-10">
            <Filter size={14} />
            <span className="text-[.8125rem] font-semibold">
              Thêm điều kiện lọc
            </span>
            <ChevronDown size={14} />
          </div>

          <Button variant="primary" size="sm" className="w-33.5">
            <div className="flex items-center gap-1">
              <Plus size={16} className="text-white" />
              <span className="text-white text-[.8125rem]">Tạo sản phẩm</span>
            </div>
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-lg">
          <table className="w-full text-left text-[14px] text-black-300">
            <thead>
              <tr className="">
                <th className="p-4 w-10">
                  <input type="checkbox" />
                </th>
                <th className="p-4 font-semibold">Mã sản phẩm / SKU</th>
                <th className="p-4 font-semibold">Tên sản phẩm</th>
                <th className="p-4 font-semibold">Tình trạng</th>
                <th className="p-4 font-semibold">Số lượng tồn kho</th>
                <th className="p-4 font-semibold">Ngày tạo</th>
              </tr>
            </thead>

            <tbody>
              {paginatedProducts.map((product, idx) => (
                <tr
                  key={product.id}
                  className="border-t border-grey-200 hover:bg-slate-50"
                >
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">
                    <div className={`px-2 py-1 w-fit rounded-md text-white text-[12px] ${product.status === "Chưa được phép bán" ? "bg-red" : "bg-green-500"}`}>
                        {product.status}
                    </div>
                  </td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">{product.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-6 text-[13px]">
          <button
            className="px-3 py-1 rounded-lg disabled:opacity-50"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft
              size={24}
              className="text-grey-900 hover:text-blue-500"
            />
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer ${
                currentPage === page
                  ? "bg-primary-gradient text-white"
                  : "hover:text-blue-500"
              }`}
              onClick={() => handleChangePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="px-3 py-1 disabled:opacity-50"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight
              size={24}
              className="text-grey-900 hover:text-blue-500"
            />
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;
