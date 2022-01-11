import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesAll.css';

const ServicesAll = ({ service }) => {
    const { _id, name, price, about, image } = service;
    return (
        <div className='col-md-4 my-2'>
               <div className="service pb-3 shadow">
            <img className='rounded-3 '  src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{about}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Booking {name.toLowerCase()}</button>
            </Link>
        </div>
        </div>
    );
};

export default ServicesAll;