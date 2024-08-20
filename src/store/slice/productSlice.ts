// ProductSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { initialAuthProps, initialProductsProps } from "../../utils/types";
import {
  defaultProductFormValue,
  defaultSignUpFormValue,
} from "../../utils/constant";
import { addProductsServices } from "../../services/products";
import { addProductActions } from "../actions/productActions";

const initialState: initialProductsProps = {
  loading: false,
  productList: [defaultProductFormValue],
};

export const productSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductActions.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductActions.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addProductActions.rejected, (state) => {
        state.loading = false;
      });
  },
});
