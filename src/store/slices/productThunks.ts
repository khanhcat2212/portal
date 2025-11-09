import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "@src/api/productApi";
import { ProductGroup, ProductRaw } from "@src/interfaces/productTypes";

export const fetchProducts = createAsyncThunk<ProductGroup[]>(
  "products/fetchAll",
  async () => {
    const rawData = await productApi.getAll();

    const groupsMap: Record<string, ProductGroup> = {};

    rawData.forEach((item: ProductRaw) => {
      if (!groupsMap[item.groupId]) {
        groupsMap[item.groupId] = {
          id: item.groupId,
          name: item.groupName,
          status: item.groupStatus,
          variants: [],
        };
      }

      groupsMap[item.groupId].variants.push({
        id: item.id,
        productName: item.productName,
        sku: item.sku,
        variantStatus: item.variantStatus,
        price: item.price,
      });
    });

    return Object.values(groupsMap);
  }
);
