import { useDispatch } from "react-redux";
import store, { rootReducer } from "../store";

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export interface FormItem {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  email: string;
  id: number | string | null;
}
export interface initialStateProps {
  user: any[];
  userEdit: FormItem;
}

export interface UserTableProps {
  onEdit: (id: number | string) => void;
}

export interface InputControlProps {
  value: any;
  name: string;
  label: string;
  type: "text" | "number" | "email" | "password" | "tel";
  required?: boolean;
  error: {
    name: string;
    message: string;
  };
  onChange: (value: string) => void;
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
