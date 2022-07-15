import React from "react";
import "../ProductsCard/ProductCard.css";

const ProductsCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card-content-block">
        <div className="card-content-block-img-text">
          <div className="card-content">
            <img className="card-img" src={item.image} />
            <img className="card-img" src={item.image2} />
          </div>
          <div className="card-title">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
