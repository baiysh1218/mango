import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { productsContext } from "../../contexts/productContetx";
import "../AddProduct/AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct, categories, getCategories } =
    useContext(productsContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    newProduct.append("image2", image2);
    newProduct.append("image3", image3);
    newProduct.append("image4", image4);
    createProduct(newProduct, navigate);
  }
  return (
    <div className="container">
      <div className="add-product-content-block">
        <h2>Add Product</h2>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type={"text"}
          placeholder={"title"}
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          type={"text"}
          placeholder={"description"}
        />
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          type={"number"}
          placeholder={"price"}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.title} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
        </Box>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage2(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image2 ? (
            <Typography variant="span">{image2.name}</Typography>
          ) : null}
        </Box>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage3(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image3 ? (
            <Typography variant="span">{image3.name}</Typography>
          ) : null}
        </Box>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage4(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image4 ? (
            <Typography variant="span">{image4.name}</Typography>
          ) : null}
        </Box>
        <button onClick={handleSave}>add product</button>
      </div>
    </div>
  );
};

export default AddProduct;
