import React from 'react';
import Footer from './Footer';
import './css/Home.css';
import Mobile1 from './mobile1';
import Grocery1 from './Grocery1';
import House1 from './House1';

const OurProducts = () => {
  return (
    <>
      <div className='hom-bar'>
        <div className="phone" >
          <div className="card-container" style={{ display: "flex", flexDirection:"column" }}>
            <h2 style={{ marginLeft: '20px' }}>Mobile Phones</h2>
            <div className="outer" style={{display:"flex", flexWrap:"wrap"}}>
           <Mobile1/>
           </div>
          </div>
        </div>
        <div className="phone" >
          <div className="card-container" style={{ display: "flex", flexWrap: "wrap" }}>
            <h2 style={{ marginLeft: '20px' }}>Groceries</h2>
            <div className="outer" style={{display:"flex", flexWrap:"wrap"}}>
           <Grocery1/>
           </div>
          </div>
        </div>
        <div className="phone" >
          <div className="card-container" style={{ display: "flex", flexWrap: "wrap" }}>
            <h2 style={{ marginLeft: '20px' }}>Household</h2>
            <div className="outer" style={{display:"flex", flexWrap:"wrap"}}>
           <House1/>
           </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurProducts;
