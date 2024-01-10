import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      // return state.filter((item) => item.id !== action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state = [];
      return state;
    },
  },
});

export const { addItem, removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
