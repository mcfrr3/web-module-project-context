import React, { createContext } from 'react';

export const CartContext = createContext();

export default function CartProvider(props) {
  return (
    <CartContext.Provider value={{}}>
      { props.children }
    </CartContext.Provider>
  )
}