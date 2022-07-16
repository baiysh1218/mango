import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { productsContext } from "../../contexts/productContetx";
import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
      image2,
      image3,
      image4,
    };
    createProduct(newProduct);
  }
  return (
    <div className="container">
      <div className="add-product-content-block">
        <div className="invicible"></div>
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
        <input
          value={image}
          onChange={e => setImage(e.target.value)}
          type={"text"}
          placeholder={"title image"}
        />
        <input
          value={image2}
          onChange={e => setImage2(e.target.value)}
          type={"text"}
          placeholder={"image 2"}
        />
        <input
          value={image3}
          onChange={e => setImage3(e.target.value)}
          type={"text"}
          placeholder={"image 3"}
        />
        <input
          value={image4}
          onChange={e => setImage4(e.target.value)}
          type={"text"}
          placeholder={"image 4"}
        />
        <button onClick={handleSave}>add product</button>
      </div>
    </div>
  );
};

export default AddProduct;
