import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './css/ProductDetails.css'
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from './redux/actions';

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart")
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()

  const handleCart = (product) => {
      if (cartBtn === "Add to Cart") {
          dispatch(addItem(product))
          setCartBtn("Remove from Cart")
      }
      else{
          dispatch(delItem(product))
          setCartBtn("Add to Cart")
      }
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/mobiles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const productData = await response.json();
        setProduct(productData);
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

  const ShowProduct = ({ product }) => {
    return (
      <div className="card1">
      <div className="product-details" style={{display:"flex"}}>
      <img
          className="product-image"
          src={product.imageURL}
          alt={product.brand}
        />
       <div className="div" style={{padding:"20px"}}>
       <h2 className="product-brand">{product.brand} - {product.model}</h2>
        <p className="product-description">{product.releaseDate}</p>
        <p className="product-description">{product.displaySize} - {product.resolution}</p>
        <p className="product-description"><b>Chipset:</b> {product.processor} - {product.OS}</p>
        <p className="product-description"><b>RAM:</b> {product.RAM}</p>
        <p className="product-description"><b>Storage:</b> {product.storage}</p>
        <p className="product-description"><b>Description:</b> {product.description}</p>
        <p className="product-description"><b>Battery:</b> {product.battery}</p>
        <p className="product-description"><b>Camera:</b> {product.camera}</p>
        <p className="product-description"><b>Features:</b> {product.features}</p>
        <p className="product-price">Price: {product.price}</p>
       </div>
       
      </div>
      <div className="product-actions">
        <center><button className="add-to-cart-button" onClick={()=>handleCart(product)}>{cartBtn}</button></center>
      </div>
    </div>
    );
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            {loading ? <Loading /> : <ShowProduct product={product} />}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
