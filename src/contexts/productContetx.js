import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
}

const API = "https://mysterious-journey-37714.herokuapp.com";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      // console.log(res.data.count);
      // console.log(res.data.results);
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      // console.log(res.data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

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

      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      navigate("/products-list");
      getProducts();
      // console.log(res);
    } catch (err) {
      // console.log(err.response.data.detail);
      console.log(err);
    }
  }

  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //! config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: { Authorization },
      };
      const res = await axios(`${API}/products/${id}/`, config);
      console.log(res);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        oneProduct: state.oneProduct,
        createProduct,
        getCategories,
        getProducts,
        deleteProduct,
        getOneProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
