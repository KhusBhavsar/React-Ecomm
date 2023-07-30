import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './css/ProductDetails.css'
import Footer from './Footer';


const ProductDetails2 = () => {
  const { id } = useParams();
  const [product2, setProduct2] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3004/houseItems/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const productData2 = await response.json();
        setProduct2(productData2);
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

  const ShowProduct = ({ product2 }) => {
    return (
      <div className="card1">
      <div className="product-details" style={{display:"flex"}}>
      <img
          className="product-image"
          src={product2.imageURL}
          alt={product2.name}
        />
       <div className="div" style={{padding:"20px"}}>
       <h2 className="product-brand">{product2.name}</h2>
        <p className="product-description">{product2.category}</p>
        <p className="product-description"><b></b> {product2.brand}</p>
        <p className="product-description"><b></b> {product2.capacity}</p>
        <p className="product-description"><b></b> {product2.material}</p>
        <p className="product-description"><b></b> {product2.features}</p>
        <p className="product-description"><b></b> {product2.weight}</p>
        <p className="product-description"><b>Description:</b> {product2.description}</p>
        <p className="product-price">Price: {product2.price}</p>
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
            {loading ? <Loading /> : <ShowProduct product2={product2} />}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails2;
