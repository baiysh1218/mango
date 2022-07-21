import { Box, Pagination, Slider } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import DetailsProduct from "../DetailsProduct/DetailsProduct";
import ProductsCard from "../ProductsCard/ProductsCard";

import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);
  // console.log(res);
  const [searchParams, setSearchParams] = useSearchParams();

  // const [currentPage, setCurrrentPage] = useState(1);
  const [price, setPrice] = useState([1, 10000]);

  console.log(products);
  const navigate = useNavigate();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      // _limit: 6,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    // <div className="container">
    <div className="product-list-block">
      <div className="products-filter-price">
        <input
          className="all-product-input0-search"
          onChange={e => setSearch(e.target.value)}
          placeholder="search"
        />
        <Slider
          color="secondary"
          className="slider-all-product"
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            console.log(value);
            setPrice(value);
          }}
          min={1}
          max={500}
          step={10}
          valueLabelDisplay="auto"
        />
      </div>
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
      <div className="pagination">
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          // count={10}
          variant="outlined"
          color="secondary"
        />
      </div>
    </div>
    // </div>
  );
};

export default ProductsList;
