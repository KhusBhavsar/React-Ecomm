import React, { useState, useEffect } from 'react';
import './css/Home.css';
import Footer from './Footer';
import axios from 'axios';
import Mobile from './mobile';
import Grocery from './Grocery';
import Carouseled from './Carasoul';
import HouseItems from './House';
import rightArrow from '../components/images/rightarrowpng.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [groceries, setGrocery] = useState(null);
  const [mobiles, setMobiles] = useState(null);
  const [houseItems, setHouseItems] = useState(null);

  const houseHold = async () => {
    try {
      const response = await fetch('http://localhost:3004/houseItems');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setHouseItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setHouseItems([]);
    }
  };

  useEffect(() => {
    houseHold();
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3001/mobiles')
      .then(response => {
        setMobiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMobiles([]);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3003/groceries')
      .then(response => {
        setGrocery(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setGrocery([]);
      });
  }, []);

  return (
    <>
      <div className='hom-bar'>
        <Carouseled />
        <div className='phone'>
          <div className='h3Button' style={{ display: 'flex', marginTop: '10px' }}>
            <h3 style={{ marginLeft: '20px' }}>Best Sellers - Smartphones</h3>
            <Link to='/products'>
              <img
                src={rightArrow}
                alt='rightArrow'
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                className='rightArrow'
              />
            </Link>
          </div>
          <div className='card-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {mobiles &&
              mobiles.map(mobile => <Mobile key={mobile.id} mobiles={mobile} />)}
          </div>
        </div>
        <div className='phone'>
          <div className='h3Button' style={{ display: 'flex', marginTop: '10px' }}>
            <h3 style={{ marginLeft: '20px' }}>Best Sellers - Groceries</h3>
            <Link to='/products'>
              <img
                src={rightArrow}
                alt='rightArrow'
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                className='rightArrow'
              />
            </Link>
          </div>
          <div className='card-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {groceries &&
              groceries.map(grocery => <Grocery key={grocery.id} groceries={grocery} />)}
          </div>
        </div>
        <div className='phone'>
          <div className='h3Button' style={{ display: 'flex', marginTop: '10px' }}>
            <h3 style={{ marginLeft: '20px' }}>Best Sellers - Household </h3>
            <Link to='/products'>
              <img
                src={rightArrow}
                alt='rightArrow'
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                className='rightArrow'
              />
            </Link>
          </div>
          <div className='card-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {houseItems &&
              houseItems.map(item => <HouseItems key={item.id} houseItems={item} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
