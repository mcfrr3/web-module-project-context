import React, { createContext, useState } from 'react';
import productData from '../data';

export const ProductContext = createContext();

export default function ProductProvider(props) {
  const [products] = useState(productData);

  console.log(products);

  const addItem = item => {
    return {};
  }

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      { props.children }
    </ProductContext.Provider>
  )
}