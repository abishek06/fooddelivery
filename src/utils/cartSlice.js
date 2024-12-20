import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    deleteItems: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, deleteItems } = cartSlice.actions;

export default cartSlice.reducer;
