import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import {URL} from '../constants';
const ProductDetail = () => {
  const [product , setProductDetail] = useState({})
const {id} = useParams();
const url ='https://fakestoreapi.com/products';
  useEffect(()=>{
    const fetchProductById = async () => {
    try {
      const response = await fetch(`${URL}/${id}`);
      const data = await response.json();
      setProductDetail(data);
      const product = data;
      console.log(product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }}
fetchProductById(id, url);
  }, [id])
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      terobau
    </div>
  );
};

export default ProductDetail;
