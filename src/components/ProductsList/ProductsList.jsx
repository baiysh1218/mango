import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";
import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products } = useContext(productsContext);
  useEffect(() => {
    // getProducts();
  }, []);
  // console.log(products);
  return (
    <div>
      <div className="invicible"></div>
      {products.map(item => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
