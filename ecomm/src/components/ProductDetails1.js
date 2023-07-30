import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './css/ProductDetails.css'
import Footer from './Footer';


const ProductDetails1 = () => {
  const { id } = useParams();
  const [product1, setProduct1] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3003/groceries/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const productData1 = await response.json();
        setProduct1(productData1);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  const Loading = () => {
    return <h4>Loading....</h4>;
  };

  const ShowProduct = ({ product1 }) => {
    return (
      <div className="card1">
      <div className="product-details" style={{display:"flex"}}>
      <img
          className="product-image"
          src={product1.imageURL}
          alt={product1.name}
        />
       <div className="div" style={{padding:"20px"}}>
       <h2 className="product-brand">{product1.name}</h2>
        <p className="product-description">{product1.category}</p>
        <p className="product-description"><b>Origin:</b> {product1.origin}</p>
        <p className="product-description"><b>Weight:</b> {product1.weight}</p>
        <p className="product-description"><b>Description:</b> {product1.description}</p>
        <p className="product-price">Price: {product1.price}</p>
       </div>
       
      </div>
      <div className="product-actions">
        <center><button className="add-to-cart-button">Add to Cart</button></center>
      </div>
    </div>
    );
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            {loading ? <Loading /> : <ShowProduct product1={product1} />}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
