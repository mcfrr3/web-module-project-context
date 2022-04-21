import React, { createContext } from 'react';

const test = '';

export const ProductContext = createContext();

export default function ProductProvider(props) {
  return (
    <ProductContext.Provider value={{test}}>
      { props.children }
    </ProductContext.Provider>
  )
}