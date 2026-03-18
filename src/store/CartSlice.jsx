import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items[plant.id];

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items[plant.id] = {
        ...plant,
        quantity: 1,
      };
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;

      if (state.items[itemId]) {
        state.items[itemId].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items[itemId];

      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity -= 1;
        return;
      }

      delete state.items[itemId];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      delete state.items[itemId];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
