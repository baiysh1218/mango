import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./contexts/productContetx";
import Routing from "./Routing/Routing";
import "./App.css";

const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
