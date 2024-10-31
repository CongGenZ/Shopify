import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action);
      const isExist = state.items.some((item) => item.id === action.payload.id);
      if (isExist) {
        // Tăng số lên 1
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // Thêm item
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
      alert("Add to cart succeed");
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addOne: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    minusOne: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItemToCart, removeCartItem, addOne, minusOne, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
