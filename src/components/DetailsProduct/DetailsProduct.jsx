import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import Loader from "../Loader/Loader";
// import Reviews from "../Reviews/Reviews";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);

  useEffect(() => {
    getOneProduct(id);
  }, []);

  if (!oneProduct) {
    return <Loader />;
  }
  console.log(oneProduct);

  return (
    <Container>
      <Typography variant="h5">Title: {oneProduct.title}</Typography>
      <Typography variant="h5">Price: {oneProduct.price}</Typography>
      <Typography variant="h5">
        Description: {oneProduct.description}
      </Typography>
      <img width={"300px"} src={oneProduct.image} alt="product" />
      {/* <Reviews reviews={oneProduct.reviews} /> */}
    </Container>
  );
};

export default DetailsProduct;
