'use client';

import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Product } from '@/data/products';

export interface CartOptions {
  size?: string;
  color?: string;
  placement?: string;
  quantity?: number;
}

export interface CartItem {
  key: string;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
  placement?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, options?: CartOptions) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  hasCustomPricing: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function itemKey(product: Product, options?: CartOptions) {
  return [product.id, options?.size ?? 'no-size', options?.color ?? 'no-color', options?.placement ?? 'no-placement'].join('__');
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product: Product, options: CartOptions = {}) => {
    const key = itemKey(product, options);
    const qty = Math.max(1, options.quantity ?? 1);

    setItems((previous) => {
      const existing = previous.find((item) => item.key === key);
      if (existing) {
        return previous.map((item) => (item.key === key ? { ...item, quantity: item.quantity + qty } : item));
      }
      return [
        ...previous,
        {
          key,
          product,
          quantity: qty,
          size: options.size,
          color: options.color,
          placement: options.placement,
        },
      ];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((previous) => previous.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((previous) => {
      if (quantity <= 0) return previous.filter((item) => item.key !== key);
      return previous.map((item) => (item.key === key ? { ...item, quantity } : item));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const hasCustomPricing = items.some((item) => item.product.price === 0);
    return { items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, hasCustomPricing, isCartOpen, setIsCartOpen };
  }, [items, addItem, removeItem, updateQuantity, clearCart, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
