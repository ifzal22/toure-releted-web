import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Booking.css';
import OrderPackage from './OrderPackage/OrderPackage';

const Booking = () => {
    const { serviceId } = useParams();
    const [service , setSERvice]= useState({})
    useEffect(()=>{
        fetch(`https://frozen-bayou-03992.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data =>setSERvice(data))
    } 
    ,[])
    return (
        <div className="CONTAINER">
            {/* <h2>this is booking: {serviceId}</h2> */}


            <div className=' row container mx-auto mt-5 shadow mx-3'>
                <div className=' col-md-6 CONTANT shadow m-5 mx-auto'>
               
                        <img className='img-fluid w-7 mx-auto align-items-center justify-content-center' src={service.image} alt="" />
                   
               <div className="TEXT">
               <h3 className="text-center">  {service.name}  </h3>
                <p>   {service.about} </p>
                <div className="justify-content-center text-center"><button className="btn">more</button></div>
               </div>

                </div>
               
             <div className='col-md-6 align-items-center'>
             <OrderPackage service={service}></OrderPackage>
             </div>
            </div>
            
        </div>
    );
};

export default Booking;