import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
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
    addToCart: (state, action) => {
      cartSlice.caseReducers.addItem(state, action);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items[itemId];

      if (!item) {
        return;
      }

      if (quantity <= 0) {
        delete state.items[itemId];
        return;
      }

      item.quantity = quantity;
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;

      if (state.items[itemId]) {
        cartSlice.caseReducers.updateQuantity(state, {
          payload: {
            itemId,
            quantity: state.items[itemId].quantity + 1,
          },
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items[itemId];

      if (!item) {
        return;
      }

      cartSlice.caseReducers.updateQuantity(state, {
        payload: {
          itemId,
          quantity: item.quantity - 1,
        },
      });
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
  addItem,
  addToCart,
  updateQuantity,
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
