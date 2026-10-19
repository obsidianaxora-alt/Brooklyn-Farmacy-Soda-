import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/parlorData';
import { soundEngine } from '../utils/soundEffects';

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  customization?: string;
  selectedSyrup?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, customization?: string, syrup?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalCount: number;
  subtotal: number;
  tax: number;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bk_farmacy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bk_farmacy_cart', JSON.stringify(items));
    } catch {
      // storage limit or private mode
    }
  }, [items]);

  const addToCart = (item: MenuItem, customization?: string, syrup?: string) => {
    soundEngine.playSodaBell();
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (ci) => ci.item.id === item.id && ci.customization === customization && ci.selectedSyrup === syrup
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      } else {
        return [
          ...prev,
          {
            cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            item,
            quantity: 1,
            customization,
            selectedSyrup: syrup,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.cartItemId === cartItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const tax = subtotal * 0.08875; // NYC Sales Tax
  const grandTotal = subtotal + tax;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        totalCount,
        subtotal,
        tax,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
