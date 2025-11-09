import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";
import Pagination from "@src/components/pagination/Pagination";
import { orderFilterOptions } from "@src/constants/orderFilterOptions";
import { orders } from "@src/constants/orders";
import FilterPopup from "@src/feature/orders/FIlterPopup";
import ActiveFilterBadge from "@src/feature/products/ActiveFilterBadge";
import AdminLayout from "@src/layout/adminLayout";
import { isWithinPeriod, normalizeString } from "@src/utils/parseData";
import { ChevronDown, Filter, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

type OrderField = "status" | "createdAt";

interface Filter {
  field: OrderField;
  value: string;
}

const Orders: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [selectedField, setSelectedField] = useState<OrderField>("status");
  const [selectedValue, setSelectedValue] = useState("");
  const filterPopupRef = React.useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const router = useRouter()

  const addFilter = () => {
    if (!selectedValue) return;

    const newFilter = { field: selectedField, value: selectedValue };

    if (
      activeFilters.some(
        (f) => f.field === newFilter.field && f.value === newFilter.value
      )
    )
      return;

    setActiveFilters([...activeFilters, newFilter]);
    setIsOpenFilter(false);
    setSelectedValue("");
  };

  const removeFilter = (index: number) => {
    setActiveFilters(activeFilters.filter((_, i) => i !== index));
  };

  const filteredOrders = useMemo(() => {
    let result = orders;

    if (keyword.trim()) {
      const kw = normalizeString(keyword);
      result = result.filter(
        (p) =>
          normalizeString(p.id).includes(kw) ||
          normalizeString(p.name).includes(kw) ||
          normalizeString(p.status).includes(kw)
      );
    }

    if (activeFilters.length > 0) {
      result = result.filter((order) =>
        activeFilters.every((filter) => {
          if (filter.field === "createdAt") {
            return isWithinPeriod(order.createdAt, filter.value);
          }
          return order[filter.field] === filter.value;
        })
      );
    }

    return result;
  }, [keyword, activeFilters]);

  useEffect(() => setCurrentPage(1), [keyword]);

  useEffect(() => {
    if (isOpenFilter) {
      const firstValue = orderFilterOptions[selectedField][0];
      setSelectedValue(firstValue);
    }
  }, [isOpenFilter, selectedField]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const pagesPerBlock = 5;

  const paginatedOrders = filteredOrders.slice(
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
      <div className="w-full h-[468px] bg-white rounded-sm py-6 px-5 flex flex-col justify-between">
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
          <div
            onClick={() => setIsOpenFilter((prev) => !prev)}
            className="relative cursor-pointer bg-grey-300 rounded-md flex items-center justify-center gap-2 w-45 h-10"
          >
            <Filter size={14} />
            <span className="text-[.8125rem] font-semibold">
              Thêm điều kiện lọc
            </span>
            <ChevronDown size={14} />

            {isOpenFilter && (
              <FilterPopup
                selectedField={selectedField}
                selectedValue={selectedValue}
                setSelectedField={setSelectedField}
                setSelectedValue={setSelectedValue}
                addFilter={addFilter}
              />
            )}
          </div>

          <Button onClick={() => router.push('/admin/orders/create')} variant="primary" size="sm" className="w-33.5">
            <div className="flex items-center gap-1">
              <Plus size={16} className="text-white" />
              <span className="text-white text-[.8125rem]">Tạo đơn hàng</span>
            </div>
          </Button>
        </div>

        {activeFilters.length > 0 && (
          <div className="w-full border-t border-b border-grey-200 py-4 flex items-center gap-4">
            {activeFilters.map((f, idx) => (
              <ActiveFilterBadge
                key={idx}
                filter={f}
                onRemove={() => removeFilter(idx)}
              />
            ))}
          </div>
        )}

        {/* Table */}
        <div className="rounded-lg h-100">
          <table className="w-full text-left text-[14px] text-black-300">
            <thead>
              <tr className="">
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded-lg" />
                </th>
                <th className="px-4 py-3 font-semibold">Mã đơn hàng</th>
                <th className="px-4 py-3 font-semibold">Khách hàng</th>
                <th className="px-4 py-3 font-semibold">Tình trạng</th>
                <th className="px-4 py-3 font-semibold">Thanh toán</th>
                <th className="px-4 py-3 font-semibold">Kênh</th>
                <th className="px-4 py-3 font-semibold">Tổng tiền</th>
                <th className="px-4 py-3 font-semibold">Ngày tạo</th>
              </tr>
            </thead>

            <tbody>
              {paginatedOrders.map((order, idx) => (
                <tr
                  key={order.id}
                  className="border-t border-grey-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-5">
                    <input type="checkbox" className="w-4 h-4 rounded-lg" />
                  </td>
                  <td className="px-4 py-5">{order.id}</td>
                  <td className="px-4 py-5">{order.customer}</td>
                  <td className="px-4 py-5">{order.status}</td>
                  <td className="px-4 py-5">{order.checkout}</td>
                  <td className="px-4 py-5">{order.channel}</td>
                  <td className="px-4 py-5">{order.total}</td>
                  <td className="px-4 py-5">{order.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          visiblePages={visiblePages}
          onChangePage={setCurrentPage}
        />
      </div>
    </AdminLayout>
  );
};

export default Orders;
