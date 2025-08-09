import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import productReducer from "./slices/ProductSlice";
import cardReducer from "./slices/cardSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    card: cardReducer,
  },
});
