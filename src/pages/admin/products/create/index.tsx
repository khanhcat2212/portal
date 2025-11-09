import Button from "@src/components/button/Button";
import Input from "@src/components/input/Input";
import ProductAttributes from "@src/feature/products/create/ProductAttributes";
import ProductDescription from "@src/feature/products/create/ProductDescription";
import ProductGeneralInfo from "@src/feature/products/create/ProductGeneralInfo";
import ProductImageUpload from "@src/feature/products/create/ProductImageUpload";
import ProductVariantList from "@src/feature/products/create/ProductVariantList";
import ProductVariants from "@src/feature/products/create/ProductVariants";
import AdminLayout from "@src/layout/adminLayout";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const ProductCreate: React.FC = () => {
  const [status, setStatus] = useState("allowed");
  const [image, setImage] = useState<string | null>(null);
  const [variantGroups, setVariantGroups] = useState([
    { groupName: "", variants: [""] },
  ]);

  const router = useRouter();

  const handleAddGroup = () => {
    setVariantGroups((prev) => [...prev, { groupName: "", variants: [""] }]);
  };

  const handleRemoveGroup = (index: number) => {
    setVariantGroups((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGroupNameChange = (index: number, value: string) => {
    setVariantGroups((prev) =>
      prev.map((group, i) =>
        i === index ? { ...group, groupName: value } : group
      )
    );
  };

  const handleVariantChange = (
    groupIndex: number,
    variantIndex: number,
    value: string
  ) => {
    setVariantGroups((prev) =>
      prev.map((group, i) =>
        i === groupIndex
          ? {
              ...group,
              variants: group.variants.map((v, vi) =>
                vi === variantIndex ? value : v
              ),
            }
          : group
      )
    );
  };

  const handleAddVariant = (groupIndex: number) => {
    setVariantGroups((prev) =>
      prev.map((group, i) =>
        i === groupIndex
          ? { ...group, variants: [...group.variants, ""] }
          : group
      )
    );
  };

  const handleRemoveVariant = (groupIndex: number, variantIndex: number) => {
    setVariantGroups((prev) =>
      prev.map((group, i) =>
        i === groupIndex
          ? {
              ...group,
              variants: group.variants.filter((_, vi) => vi !== variantIndex),
            }
          : group
      )
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center w-full h-166 gap-4 my-4">
        <ProductGeneralInfo status={status} setStatus={setStatus} />

        <ProductDescription
          image={image}
          handleImageUpload={handleImageUpload}
        />
      </div>

      <ProductImageUpload handleImageUpload={handleImageUpload} />

      <div className="flex items-center w-full h-[620px] gap-4 my-4">
        <ProductVariants
          variantGroups={variantGroups}
          handleAddGroup={handleAddGroup}
          handleRemoveGroup={handleRemoveGroup}
          handleGroupNameChange={handleGroupNameChange}
          handleAddVariant={handleAddVariant}
          handleRemoveVariant={handleRemoveVariant}
          handleVariantChange={handleVariantChange}
        />

        <ProductAttributes />
      </div>

      <div className="w-full h-100 gap-4 p-8 bg-white">
        <div className="w-[60%]">
          <ProductVariantList />
        </div>
      </div>

      <div className="flex w-full justify-end items-center gap-2 mt-4">
        <Button
          onClick={() => router.push("/admin/products")}
          variant="neutral"
          size="sm"
        >
          Hủy
        </Button>
        <Button onClick={() => window.alert("Lưu thông tin thành công")} variant="primary" size="sm">
          Lưu thông tin
        </Button>
      </div>
    </AdminLayout>
  );
};

export default ProductCreate;
