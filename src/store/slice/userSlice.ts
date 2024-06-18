// FormSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { initialStateProps } from "../../utils/types";
import { defaultFormValue } from "../../utils/const";

const initialState: initialStateProps = {
  user: [],
  userEdit: defaultFormValue,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = [...state.user, payload];
    },
    updateUser: (state, { payload }) => {
      state.user = payload;
    },
    removerUser: (state, { payload }) => {
      state.user = payload;
    },
    editUser: (state, { payload }) => {
      state.userEdit = payload;
    },
  },
});
export const { addUser, removerUser, updateUser, editUser } = userSlice.actions;
