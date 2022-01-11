
import React from 'react';
import './Banner.css';

const Banner = () => {

      {/* 
            https://i.ibb.co/94HW9ff/pexels-archie-binamira-672358.jpg
https://i.ibb.co/y5ScrxM/pexels-mads-thomsen-2739013.jpg
https://i.ibb.co/frHKpvs/pexels-francesco-ungaro-2325446.jpg */}
   
    return (
       
      <div id="carouselExampleIndicators" className="carousel slide MARGIN" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner IMG">
        <div className="carousel-item active ">
          <img className='' src='https://i.ibb.co/M7p5GkQ/forum-slide-1.jpg' className="d-block  w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5>Cyclein HealthFull Our Body</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/94HW9ff/pexels-archie-binamira-672358.jpg" className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margel Art The Bast Way for Exercise</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/frHKpvs/pexels-francesco-ungaro-2325446.jpg " className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Good Food </h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
};

export default Banner;