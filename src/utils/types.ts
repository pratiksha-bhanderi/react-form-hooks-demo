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

export interface UserTableProps {
  onEdit: (id: number | string) => void;
}

export interface InputControlProps {
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  required?: boolean;
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
