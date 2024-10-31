import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slices/commonSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import themeSlice from "./slices/themeSlice";
import productSlice  from "./slices/productSlice"
export const store = configureStore({
  reducer: {
    commonSlice,
    authSlice,
    cartSlice,
    themeSlice,
    productSlice
  },
});
