"use client";

import type React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  options: {
    size?: string;
    material?: string;
    finish?: string;
    color?: string;
    option?: string;
    unit?: string;
  };
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        // Replace existing item with new customization options
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? action.payload : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART": {
      const total = action.payload.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const itemCount = action.payload.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { items: action.payload, total, itemCount };
    }

    default:
      return state;
  }
}

interface CartContextType extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  hasItem: (id: string) => boolean;
  getWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("skyprint-cart");
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("skyprint-cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const hasItem = (id: string) => {
    return state.items.some((item) => item.id === id);
  };

  const getWhatsAppMessage = () => {
    if (state.items.length === 0) return "";

    let message = "Hello! I'd like to order the following items:\n\n";

    state.items.forEach((item, index) => {
      message += `${index + 1}. 📦 *${item.name}*\n`;
      message += `   💰 Price: ₦${item.price.toLocaleString()}\n`;
      message += `   📊 Quantity: ${item.quantity} pieces\n`;

      if (item.options.option)
        message += `   🔖 Option: ${item.options.option}\n`;
      if (item.options.unit) message += `   📦 Unit: ${item.options.unit}\n`;
      if (item.options.size) message += `   📏 Size: ${item.options.size}\n`;
      if (item.options.material)
        message += `   🏗️ Material: ${item.options.material}\n`;
      if (item.options.finish)
        message += `   ✨ Finish: ${item.options.finish}\n`;
      if (item.options.color) message += `   🎨 Color: ${item.options.color}\n`;

      message += `   💵 Subtotal: ₦${(
        item.price * item.quantity
      ).toLocaleString()}\n\n`;
    });

    message += `🛒 *Total Order Value: ₦${state.total.toLocaleString()}*\n\n`;
    message +=
      "Please provide me with a detailed quote and timeline for this order. Thank you!";

    return message;
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        hasItem,
        getWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
