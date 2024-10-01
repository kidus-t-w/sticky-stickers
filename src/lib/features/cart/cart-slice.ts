// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a cart item
interface CartItem {
  id: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string
}

// Define the initial state type
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

export const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.price * action.payload.quantity;
    },

    // Remove an item from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Update the quantity of an item
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalAmount +=
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },

    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
