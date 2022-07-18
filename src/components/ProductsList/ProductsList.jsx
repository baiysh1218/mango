import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";
import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products } = useContext(productsContext);
  const navigate = useNavigate();
  useEffect(() => {
    // getProducts();
  }, []);
  // console.log(products);
  return (
    <div>
      <div className="invicible"></div>
      <div>
        <button onClick={() => navigate("/add-product")}>add product</button>
      </div>
      {products.map(item => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
