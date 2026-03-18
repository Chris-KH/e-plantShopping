import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { CartItem, CartState, Plant } from "../types";

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
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
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];

      if (!item) {
        return;
      }

      if (item.quantity <= 1) {
        delete state.items[id];
        return;
      }

      item.quantity -= 1;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState): CartItem[] =>
  Object.values(state.cart.items);

export const selectCartCount = (state: RootState): number =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state: RootState): number =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

export default cartSlice.reducer;
