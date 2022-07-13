import React from "react";

const ProductsCard = ({ item }) => {
  console.log(item);
  return <div>{item.title}</div>;
};

export default ProductsCard;
