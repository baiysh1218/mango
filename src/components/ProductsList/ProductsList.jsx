import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productContetx";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    <div>
      {products.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
