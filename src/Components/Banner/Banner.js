
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {


   
    return (
       
      <div id="carouselExampleIndicators" className=" MARGIN" data-bs-ride="carousel">
      <div className="carousel-indicators">
      
      </div>
      <div className="carousel-inner home IMG">
        <div className="carousel-item active ">
          <img src='https://i.ibb.co/M7p5GkQ/forum-slide-1.jpg' className="d-block home-parallax w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
        
          <Link to="/services" data-speed="7" href="#" className='btn'>explore Packages</Link>
          </div>
        </div>
    
    
      </div>

    </div>
    );
};

export default Banner;