import React, { createContext, useState } from 'react';
import productData from '../data';


export const ProductContext = createContext();

export default function ProductProvider(props) {
  const [products, setProducts] = useState(productData);

  const addItem = item => {
    setProducts([
      ...products,
      item
    ]);
  }

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      { props.children }
    </ProductContext.Provider>
  )
}