"use client";

import { createContext, useContext } from "react";

/**
 * CartProvider — هيكل جاهز لمتجر كامل لاحقًا.
 * دلوقتي سلة فاضية بدون أي منطق شراء. لما تتضاف السلة والدفع:
 * 1) خزّن البنود هنا واربطها بـ localStorage أو API.
 * 2) استخدم useCart في ProductCard وصفحة المنتج.
 * 3) فعّل /cart و /checkout بدل الـ placeholder.
 */

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
}

const emptyCart: CartContextValue = { items: [], count: 0 };

const CartContext = createContext<CartContextValue>(emptyCart);

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartContext.Provider value={emptyCart}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
