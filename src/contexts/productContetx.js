import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
  favorites: [],
  favoritesPages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload.results,
        favoritesPages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
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
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/category/list/`, config);
      // console.log(res);
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
      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{ products: state.products, creatProdutc, getProducts }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
