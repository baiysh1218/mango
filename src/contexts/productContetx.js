import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
}

const API = "http://localhost:8000/products";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      navigate("/products");
      // getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{ products: state.products, createProduct }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
