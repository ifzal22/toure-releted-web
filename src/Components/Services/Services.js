import React, { useEffect, useState } from 'react';
import ServicesAll from '../ServicesAll/ServicesAll';
import './Services.css';






const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div >
                <h1 className='text-center'>Popular Packages</h1>
            </div>
          
              { 
services.length ===0 ? <div className="spinner-border text-danger " role="status">
<span className="sr-only text-center">Loading...</span>
</div>

:
<div className='row container mx-auto'>
{
    services.map(service =>
       <ServicesAll key={service._id}
       service={service}></ServicesAll>  )
}

</div>
              }
           
        </div>
    );
};

export default Services;