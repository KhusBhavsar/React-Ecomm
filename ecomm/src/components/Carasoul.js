import React from 'react'
import bg1 from './images/1 (1).png'
import bg2 from './images/2.png'
import bg3 from './images/3.png'
import Carousel from 'react-bootstrap/Carousel';
import "./css/Carousel.css"




const Carouseled = () => {
    return (
        <div style={{ height: "350px" }}  className='mainCarousel'>
            <Carousel>
                <Carousel.Item interval={1000}>
                <img src={bg1} alt="bg1" style={{height:"350px", width:"100%"}}/>
                   
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={bg2} alt="bg2" style={{height:"350px", width:"100%"}}/>
                    
                </Carousel.Item>
                <Carousel.Item>
                <img src={bg3} alt="bg3" style={{height:"350px", width:"100%"}} />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carouseled
