// FormSlice.ts
import { createSlice } from "@reduxjs/toolkit";
export const defaultFormValue = {
  id: "",
  first_name: "",
  last_name: "",
  middle_name: "",
  phone_number: "",
  email: "",
  password: "",
};
interface initialStateProps {
  user: any[];
}
const initialState: initialStateProps = {
  user: [],
};

export const formSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, { payload }) => ({
      ...state,
      user: [...state.user, payload],
    }),
    updateUser: (state, { payload }) => ({
      ...state,

      user: payload,
    }),
    removerUser: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
  },
});
export const { addUser, removerUser, updateUser } = formSlice.actions;
