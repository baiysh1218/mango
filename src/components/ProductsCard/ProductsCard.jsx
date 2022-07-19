import React, { useContext, useState } from "react";
import "../ProductsCard/ProductCard.css";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { cartContext } from "../../contexts/cardContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";

const ProductsCard = ({ item }) => {
  // console.log(item);
  const { addToCart, checkProductInCart } = useContext(cartContext);
  const { deleteProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [productCart, setProductCart] = useState(checkProductInCart(item.id));

  // console.log(item);
  return (
    <div className="card-block">
      <div className="card-content-block">
        <div className="card-content-block-img-text">
          <div className="card-content">
            <img className="card-img" src={item.image} />
            <img className="card-img" src={item.image2} />
          </div>
          <div className="card-section-block">
            <div className="card-title">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <div className="card-icon-block">
              <IconButton
                className="btn-cart"
                onClick={() => {
                  addToCart(item);
                  setProductCart(checkProductInCart(item.id));
                }}>
                {productCart ? (
                  <ShoppingCartRoundedIcon />
                ) : (
                  <ShoppingCartOutlinedIcon />
                )}
              </IconButton>
            </div>
          </div>
          {item.authir ? (
            <div>
              <button onClick={() => deleteProduct(item.id)}>delete</button>
              <button onClick={() => navigate(`/edit/${item.id}`)}>edit</button>
            </div>
          ) : null}

          <button onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
