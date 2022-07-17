import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./contexts/productContetx";
import Routing from "./Routing/Routing";
import "./App.css";
import { CardContent } from "@mui/material";
import CartContextProvider from "./contexts/cardContext";

const App = () => {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
};

export default App;
