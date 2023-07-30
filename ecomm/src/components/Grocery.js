import React from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';


const Grocery = ({ groceries }) => {
    return (
        <div className="card">
            <img src={groceries.imageURL} alt='groceries'/>
            <p>{groceries.name}</p>
            <p>{groceries.price}</p>
           <Link to={`/groceries/${groceries.id}`}>BUY NOW</Link>
        </div>
    );
};

export default Grocery;
