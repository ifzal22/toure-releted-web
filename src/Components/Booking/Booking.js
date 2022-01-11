import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Booking.css';
import OrderPackage from './OrderPackage/OrderPackage';

const Booking = () => {
    const { serviceId } = useParams();
    const [service , setSERvice]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setSERvice(data))
    } 
    ,[])
    return (
        <div>
 {/*            <h2>this is booking: {serviceId}</h2> */}


            <div className=' row container mx-auto mt-5'>
                <div className=' col-md-6 '>
               
                        <img className='img-fluid w-7' src={service.image} alt="" />
                   
                <h3>  {service.name}  </h3>
                <p>   {service.about} </p>

                </div>
               
             <div className='col-md-6'>
             <OrderPackage service={service}></OrderPackage>
             </div>
            </div>
            
        </div>
    );
};

export default Booking;