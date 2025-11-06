import React from "react";
import Input from "@src/components/input/Input";
import Button from "@src/components/button/Button";
import { Plus, Trash, X } from "lucide-react";

interface VariantGroup {
  groupName: string;
  variants: string[];
}

interface Props {
  variantGroups: VariantGroup[];
  handleAddGroup: () => void;
  handleRemoveGroup: (index: number) => void;
  handleGroupNameChange: (index: number, value: string) => void;
  handleVariantChange: (
    groupIndex: number,
    variantIndex: number,
    value: string
  ) => void;
  handleAddVariant: (groupIndex: number) => void;
  handleRemoveVariant: (groupIndex: number, variantIndex: number) => void;
}

const ProductVariants: React.FC<Props> = ({
  variantGroups,
  handleAddGroup,
  handleRemoveGroup,
  handleGroupNameChange,
  handleVariantChange,
  handleAddVariant,
  handleRemoveVariant,
}) => {
  return (
    <div className="w-[60%] py-8 px-8 rounded-md bg-white h-full overflow-y-auto">
      <p className="text-[1.125rem] font-bold mb-6 text-black-300">
        Phân loại sản phẩm
      </p>

      {variantGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="bg-white-300 flex items-stretch rounded-sm relative mb-6"
        >
          {variantGroups.length > 1 && (
            <X
              className="absolute top-2 right-2 text-grey-500 cursor-pointer"
              size={16}
              onClick={() => handleRemoveGroup(groupIndex)}
            />
          )}

          <div className="w-2 bg-grey-500 rounded-l-sm" />
          <div className="flex flex-1 p-8 items-center">
            <div className="flex flex-col w-full">
              <div className="flex w-full items-center gap-8 pb-3">
                <label className="text-[.875rem] w-32 shrink-0 whitespace-nowrap">
                  Tên nhóm phân loại
                </label>
                <div className="flex-1">
                  <Input
                    variant="form"
                    value={group.groupName}
                    onChange={(e) =>
                      handleGroupNameChange(groupIndex, e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex w-full items-start gap-8">
                <label className="text-[.875rem] w-32 shrink-0 whitespace-nowrap">
                  Loại hàng
                </label>

                <div className="flex-1 flex flex-col gap-4">
                  {group.variants.map((variant, variantIndex) => (
                    <div key={variantIndex} className="flex items-center gap-4">
                      <Input
                        variant="form"
                        value={variant}
                        onChange={(e) =>
                          handleVariantChange(
                            groupIndex,
                            variantIndex,
                            e.target.value
                          )
                        }
                      />
                      {group.variants.length > 1 && (
                        <Trash
                          onClick={() =>
                            handleRemoveVariant(groupIndex, variantIndex)
                          }
                          className="text-grey-900 cursor-pointer hover:scale-[1.03] transition-all"
                          size={20}
                        />
                      )}
                    </div>
                  ))}

                  <Button
                    variant="dash"
                    size="sm"
                    className="h-10"
                    onClick={() => handleAddVariant(groupIndex)}
                  >
                    <div className="flex items-center justify-center">
                      <Plus size={16} className="text-blue" />
                      <p className="text-blue">Thêm loại hàng</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button variant="primary" size="sm" onClick={handleAddGroup}>
        Thêm nhóm phân loại
      </Button>
    </div>
  );
};

export default ProductVariants;
