// AuthSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { initialAuthProps } from "../../utils/types";
import { defaultSignUpFormValue } from "../../utils/constant";

const initialState: initialAuthProps = {
  userData: { email: "", password: "", name: "" },
  userToken: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    signup: (state, { payload }) => {
      state.userData = payload;
    },
    login: (state) => {
      // state.userData = defaultSignUpFormValue;
      state.userToken = "abc";
    },
    logout: (state) => {
      state.userData = defaultSignUpFormValue;
      state.userToken = null;
    },
  },
});
export const { signup, login, logout } = authSlice.actions;
