import { ProductItem } from "../../utils/types";
import { axiosInstance } from "../axiosConfig";

export const addProductsServices = async (credential: ProductItem) => {
  try {
    const response = await axiosInstance.post(`/products/add`, credential);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
