import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
