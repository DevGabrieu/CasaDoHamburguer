import { createContext, useState, type ReactNode } from "react";
import type { CartItemType, CartItemsContext } from "../types/CartItem";

export const CartItemContext = createContext<CartItemsContext>({
  cartItems: [],
  setCartItems: () => {}
});

export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
