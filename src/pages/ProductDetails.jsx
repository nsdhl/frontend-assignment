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
    <div className='product-detail-container'>
      <img src={product.image} alt={product.name} className='product-img'/>
     <div className='product-wrapper'>
      <h2>{product.title}</h2>
      <p>Description: {product.description}</p>
      <h4>Price: ${product.price}</h4>
    </div>
    </div>
  );
};

export default ProductDetail;
