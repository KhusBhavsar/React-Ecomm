import React from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';



const HouseItems = ({ houseItems }) => {
    return (
        <div className="card">
            <img src={houseItems.imageURL} alt='houseItems'/>
            <p>{houseItems.name}</p>
            <p>{houseItems.price}</p>
            <Link to={`/houseItems/${houseItems.id}`}>BUY NOW</Link>
        </div>
    );
};

export default HouseItems;
