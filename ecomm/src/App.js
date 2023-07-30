import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import OurProducts from './components/Our Products';
import Home from './components/Home';
import Purchases from './components/Purchases';
import ProductDetails from './components/ProductDetails';
import Settings from './components/Settings';
import ProductDetails1 from './components/ProductDetails1';
import ProductDetails2 from './components/ProductDetails2';


const App = () => {
  return (
    <div className="main">
      <div className="mainNavbar">
        <Navbar />
      </div>
      <div className="mainRoutes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<OurProducts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/mobiles/:id" element={<ProductDetails />} />
          <Route path="/groceries/:id" element={<ProductDetails1 />} />
          <Route path="/houseItems/:id" element={<ProductDetails2/>} />
          <Route path="/settings" element={<Settings />} />
    
        </Routes>
      </div>
    </div>
  );
};

export default App;
