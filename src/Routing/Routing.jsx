import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import Intro from "../components/Intro/Intro";
import ProductsCard from "../components/ProductsCard/ProductsCard";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductsUserList from "../components/ProductsUserList/ProductsUserList";
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/products-list" element={<ProductsList />} />
      <Route path="/products-user-list" element={<ProductsUserList />} />

    </Routes>
  );
};

export default Routing;
