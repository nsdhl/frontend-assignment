import React, { useState, useEffect } from 'react';
import Product from './product';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='product-list'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>  
  );
};

export default ProductList;
