import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { authSlice } from "./slice/authSlice";
export const rootReducer = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
