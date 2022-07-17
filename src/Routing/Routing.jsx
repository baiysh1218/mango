import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import AddProduct from "../components/AddProduct/AddProduct";
import Intro from "../components/Intro/Intro";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductsUserList from "../components/ProductsUserList/ProductsUserList";
import CreditCard from "../components/CreditCard/CreditCard";
import Card from "../components/Card/Card";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/products-list" element={<ProductsList />} />
      <Route path="/products-user-list" element={<ProductsUserList />} />
      <Route path="/credit-card" element={<CreditCard />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
};

export default Routing;
