import React, { useState, useMemo, useEffect } from "react";
import {
  ArrowDownFromLine,
  ArrowUpFromLine,
} from "lucide-react";
import Pagination from "@src/components/pagination/Pagination";
import Input from "@src/components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@src/store/store";
import { fetchProducts } from "@src/store/slices/productThunks";
import { addToCart, removeFromCart } from "@src/store/slices/cartThunks";
import { ProductGroup, ProductVariant } from "@src/interfaces/productTypes";


const ITEMS_PER_PAGE = 2;

const uid = "1234"

const ProductSelectTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { groups } = useSelector((state: RootState) => state.products);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { items: cartItems } = useSelector((state: RootState) => state.carts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const filteredGroups = useMemo(() => {
    return groups.filter((group) =>
      group.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, groups]);

  const totalPages = Math.ceil(filteredGroups.length / ITEMS_PER_PAGE);
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginatedGroups = filteredGroups.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
  };


  const handleCheckboxChange = (group: ProductGroup, variant: ProductVariant, checked: boolean) => {
    if (checked) {
      dispatch(addToCart({
        uid,
        product: {
          id: variant.id,
          name: group.name,
          status: group.status,
          variants: [variant],
        },
      }));
    } else {
      const existingItem = cartItems.find(
        (item) => item.product.id === variant.id
      );
      if (existingItem) {
        dispatch(removeFromCart({ itemId: existingItem.id }));
      }
    }
  };


  return (
    <div className="w-full py-8 px-8 rounded-md bg-white">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Chọn sản phẩm
      </p>

      <Input
        variant="outline"
        placeholder="Tìm kiếm sản phẩm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        withIcon
      />

      {/* Header */}
      <div className="flex items-center border-b border-gray-200 py-4 px-12 text-[.875rem] font-semibold text-black-300">
        <div className="flex-1 min-w-[100px]">Sản phẩm</div>
        <div className="w-[140px]">Trạng thái</div>
        <div className="w-[120px] text-right">Tuỳ chọn</div>
      </div>

      {/* Data */}
      {paginatedGroups.map((group) => (
        <div
          key={group.id}
          className={`border-b border-gray-200 text-[14px] ${expanded.includes(group.id) ? "bg-white-400" : ""}`}
        >
          <div
            className="flex items-center py-4 cursor-pointer px-12"
            onClick={() => toggleExpand(group.id)}
          >
            <div className="flex-1 font-medium text-gray-900 min-w-[100px]">
              {group.name}
            </div>

            <div
              className={`w-[130px] italic ${group.status === "Còn hàng" ? "text-green-500" : "text-red-500"
                }`}
            >
              {group.status}
            </div>

            <div className="w-[120px] flex justify-end pr-5">
              {expanded.includes(group.id) ? (
                <ArrowUpFromLine size={18} />
              ) : (
                <ArrowDownFromLine size={18} />
              )}
            </div>
          </div>

          {expanded.includes(group.id) && (
            <div className="py-2 space-y-2 bg-white-300 px-12 border-t border-grey-200">
              {group.variants.map((v) => (
                <div key={v.id} className="flex items-start text-[14px] py-1">
                  <div className="flex-1 flex items-start gap-2 min-w-[100px]">
                    <input
                      type="checkbox"
                      checked={isInCart(v.id)}
                      className="mt-1"
                      disabled={v.variantStatus === "Hết hàng"}
                      onChange={(e) =>
                        handleCheckboxChange(group, v, e.target.checked)
                      }
                    />
                    <div>
                      <span>{v.productName}</span>
                      <div className="text-xs text-gray-500 whitespace-nowrap">
                        Mã sản phẩm / SKU: {v.sku}
                      </div>
                    </div>
                  </div>

                  <div className="w-[220px] flex flex-1 gap-8 items-center text-sm pl-4">
                    <span
                      className={`italic ${v.variantStatus === "Còn hàng"
                          ? "text-green-500"
                          : "text-red-500 mr-1"
                        }`}
                    >
                      {v.variantStatus}
                    </span>
                    <span className="font-medium text-right whitespace-nowrap">
                      {v.price.toLocaleString("vi-VN")} VND
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={visiblePages}
        onChangePage={(p) => setCurrentPage(p)}
      />
    </div>
  );
};

export default ProductSelectTable;
