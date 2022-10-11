import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();

  const addProduct = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, brand, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <>
      <div className="product">
        <h1 className="Lh1">Add Product</h1>
        <input
          className="inputBox"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Enter product name"
        />
        <input
          className="inputBox"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          type="text"
          placeholder="Enter product price"
        />
        <input
          className="inputBox"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          type="text"
          placeholder="Enter product category"
        />
        <input
          className="inputBox"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          value={brand}
          type="text"
          placeholder="Enter product brand"
        />
        <button onClick={addProduct} className="appbutton">
          Add product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
