import { useDispatch } from "react-redux";
import store, { rootReducer } from "../store";

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export interface FormItem {
  first_name: string;
  last_name: string;
  middle_name?: string;
  phone_number: string;
  email: string;
  id?: string;
}
export interface LoginItem {
  email: string;
  password: string;
}

export interface SignupItem {
  name: string;
  email: string;
  password: string;
}

export interface initialStateProps {
  user: any[];
  userEdit: FormItem;
}
interface userProps {
  email: string;
  name: string;
  password: string;
}
export interface initialAuthProps {
  userData: userProps;
  userToken: null | string;
}

export interface initialProductsProps {
  loading: boolean;
  productList: ProductItem[];
}

export interface UserTableProps {
  onEdit: (id: number | string) => void;
}

export interface InputControlProps {
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  required?: boolean;
  index?: number;
}

export interface Error {
  name: string;
  message: string;
}
export interface handleOnChangeProps {
  name: string;
  value: string;
}
// export interface FormProps {
//   formValue: FormItem;
//   setFormValue: React.Dispatch<React.SetStateAction<FormItem>>;
//   error: Error;
// }

// add products
export interface reviewItem {
  rating: string;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface ProductItem {
  title: string;
  description: string;
  category: string;
  price: string;
  // rating: string;
  stock: string;
  sku: string;
  brand: string;
  availabilityStatus: string;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  thumbnail: string;
}
export interface ProductList {
  product: ProductItem[];
}
