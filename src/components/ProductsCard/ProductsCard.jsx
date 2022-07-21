import React, { useContext, useEffect, useState } from "react";
import "../ProductsCard/ProductCard.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartContext } from "../../contexts/cardContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";

const ProductsCard = ({ item }) => {
  console.log(item);
  const { addToCart, checkProductInCart } = useContext(cartContext);
  const { deleteProduct, toggleLike, addLike } = useContext(productsContext);
  const navigate = useNavigate();
  const [productCart, setProductCart] = useState(checkProductInCart(item.id));

  return (
    <div className="card-block">
      <div className="card-content-block">
        <div className="card-content-block-img-text">
          <div className="card-content">
            <img className="card-img" src={item.image} />
          </div>
          <div className="card-section-block">
            <div className="card-title">
              <p>{item.title}</p>
              <p>{item.price}</p>
              Likes: {item.like} <br />
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

              <button onClick={() => navigate(`/details/${item.id}`)}>
                Details
              </button>
              <div>
                <button onClick={() => deleteProduct(item.id)}>delete</button>
                <button onClick={() => navigate(`/edit/${item.id}`)}>
                  edit
                </button>
              </div>

              <IconButton onClick={() => addLike(item.id)}>
                {item.like}

                <FavoriteIcon
                  color={item.like === 0 ? "black" : "error"}
                  // color="error"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
