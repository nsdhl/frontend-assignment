import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import Product from "./product";
import "../App.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0   ? (
        products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id}>
          <Product product={product} key={index} />
         </Link>
        ))
      ) : (<p>search result not found</p>)
      }
    </div>
  );
};

export default ProductList;
