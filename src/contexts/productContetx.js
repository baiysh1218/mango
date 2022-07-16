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

  async function creatProdutc(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function getProducts() {
    let res = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    // console.log(res.data);
  }
  // getProducts();

  return (
    <productsContext.Provider
      value={{ products: state.products, creatProdutc, getProducts }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
