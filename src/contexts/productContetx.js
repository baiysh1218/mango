import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2),
      };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const PRODUCTS_API = "http://localhost:8001/products";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCategories() {
    try {
      // console.log(res.data.count);
      // console.log(res.data.results);
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios(`${API}/category/`, config);
      console.log(res);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios.post(`${API}/products/, newProduct`, config);
      // navigate("/products");
      // getProducts();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{ products: state.products, creatProdutc }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
