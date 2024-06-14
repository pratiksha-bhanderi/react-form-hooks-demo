// FormSlice.ts
import { createSlice } from "@reduxjs/toolkit";
export const defaultFormValue = {
    id:0,
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
    addUser: (state, action) => ({
      ...state,
      user: [...state.user, action.payload],
    }),

    // ...
    finalAction: (state, action) => ({
      ...state,
      otherProperty: action.payload,
    }),
  },
});
export const { addUser } = formSlice.actions;
