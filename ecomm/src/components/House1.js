import React, { useState, useEffect } from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';

const House1 = () => {
    const [householdItems, setHouseholdItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const dataItems = async () => {
        try {
            const response = await fetch('http://localhost:3005/ecomm');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            const householdItemsData = data.find((item) => item.householdItems);
            setHouseholdItems(householdItemsData.householdItems);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setHouseholdItems([]);
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
            {householdItems.map((item) => (

                <div className='card' key={item.id} >
                    <img src={item.imageURL} alt={item.model} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <Link to={`/houseItems/${item.id}`}>BUY NOW</Link>
                </div>

            ))}
        </>
    );
};

export default House1;
