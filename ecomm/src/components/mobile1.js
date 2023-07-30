import React, { useState, useEffect } from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';

const Mobile1 = () => {
    const [mobiles, setMobiles] = useState([]);
    const [loading, setLoading] = useState(true);

    const dataItems = async () => {
        try {
            const response = await fetch('http://localhost:3005/ecomm');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            const mobilesData = data.find((item) => item.mobiles);
            setMobiles(mobilesData.mobiles);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setMobiles([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        dataItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {mobiles.map((mobile) => (
              
                    <div className='card' key={mobile.id} >
                        <img src={mobile.imageURL} alt={mobile.model} />
                        <p>{mobile.model}</p>
                        <p>{mobile.color}</p>
                        <p>{mobile.price}</p>
                        <p>Display Size: {mobile.displaySize}</p>
                        <Link to={`/mobiles/${mobile.id}`}>BUY NOW</Link>
                    </div>
               
            ))}
        </>
    );
};

export default Mobile1;
