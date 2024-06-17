import { GridRowSelectionModel } from "@mui/x-data-grid";

export interface FormItem {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  email: string;
  password: string;
  id: number | string | null;
}

export interface UserTableProps {
  onEdit: (id: number | string) => void;
  setSelectedUser: React.Dispatch<React.SetStateAction<GridRowSelectionModel>>;
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
export interface FormProps {
  formValue: FormItem;
  setFormValue: React.Dispatch<React.SetStateAction<FormItem>>;
  error: Error;
}
