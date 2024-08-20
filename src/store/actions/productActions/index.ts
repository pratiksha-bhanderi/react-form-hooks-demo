import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductItem } from "../../../utils/types";
import { addProductsServices } from "../../../services/products";

export const addProductActions = createAsyncThunk(
  "addProduct",
  async (credential: ProductItem) => {
    try {
      const response = await addProductsServices(credential);
      console.log("fgargsrg", response);

      return response;
    } catch (error) {
      console.log("gefrgerg", error);

      return error;
    }
  }
);
