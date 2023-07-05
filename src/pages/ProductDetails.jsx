import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const ProductDetail = ({ product }) => {

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
