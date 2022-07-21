import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";

import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products, getProducts } = useContext(productsContext);
  console.log(products);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    // <div className="container">
      <div>
      {/* <div className="invicible"></div> */}
      {products.map(elem => (
        <div key={elem.id} elem={elem}>
          {elem.user ? (
            <button onClick={() => navigate("/add-product")}>
              add product
            </button>
          ) : null}
        </div>
      ))}

      {products.map(item => (
        <ProductsCard key={item.id} item={item} />
      ))}
      </div>
    // </div>
  );
};

export default ProductsList;
