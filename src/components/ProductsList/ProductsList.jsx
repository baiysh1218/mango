import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";
import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    <div className="container">
      <div className="product-list-block">
        {products.map(item => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
