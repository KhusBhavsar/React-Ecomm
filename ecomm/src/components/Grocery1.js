import React, { useState, useEffect } from 'react';
import '../components/css/MobileCard.css';
import { Link } from 'react-router-dom';

const Grocery1 = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataItems = async () => {
    try {
      const response = await fetch('http://localhost:3005/ecomm');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      const groceriesData = data.find((item) => item.groceries);
      setGroceries(groceriesData.groceries);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setGroceries([]);
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
    {groceries.map((item) => (
      
            <div className='card' key={item.id} >
                <img src={item.imageURL} alt={item.model} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <Link to={`/groceries/${item.id}`}>BUY NOW</Link>
            </div>
       
    ))}
</>
  );
};

export default Grocery1;
