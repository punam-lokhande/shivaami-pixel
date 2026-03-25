import { createContext, useContext, useState, ReactNode } from "react";
import { Phone } from "@/data/phones";

interface CartItem {
  phone: Phone;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (phoneId: string) => void;
  updateQuantity: (phoneId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (phone: Phone) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.phone.id === phone.id);
      if (existing) return prev.map((i) => i.phone.id === phone.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { phone, quantity: 1 }];
    });
  };

  const removeFromCart = (phoneId: string) => setItems((prev) => prev.filter((i) => i.phone.id !== phoneId));
  const updateQuantity = (phoneId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(phoneId);
    setItems((prev) => prev.map((i) => i.phone.id === phoneId ? { ...i, quantity } : i));
  };
  const clearCart = () => setItems([]);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.phone.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
