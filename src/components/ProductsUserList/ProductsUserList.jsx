import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsUserList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map(item => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsUserList;
