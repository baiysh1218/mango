import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [4444],
};

function reducer(state = INIT_STATE, action) {}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <productsContext.Provider value={{}}>{children}</productsContext.Provider>
  );
};
export default ProductsContextProvider;
