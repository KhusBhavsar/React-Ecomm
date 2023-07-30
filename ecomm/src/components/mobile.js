import React from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';


const Mobile = ({ mobiles }) => {
    return (
        <div className="card">
            <img src={mobiles.imageURL} alt={mobiles.model} />
            <p>{mobiles.brand}</p>
            <p>{mobiles.color}</p>
            <p>{mobiles.price}</p>
            <p>Display Size: {mobiles.displaySize}</p>
            <Link to={`/mobiles/${mobiles.id}`}>BUY NOW</Link>
        </div>
    );
};

export default Mobile;
