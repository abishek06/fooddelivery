import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default appStore;
