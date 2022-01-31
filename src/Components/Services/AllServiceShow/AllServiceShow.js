import React, { useEffect, useState } from 'react';
import ServicesAll from '../../ServicesAll/ServicesAll';
import './AllServicesShow.css';

const AllServiceShow = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-bayou-03992.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data.slice()));
    },[])
    return (
        <div className='CONTAINER'>
            

            <div>
            <div >
                <h1 className='text-center'>Popular Packages</h1>
            </div>
          
              { 
services.length ===0 ? <div className="spinner-border text-danger mx-auto text-center" role="status">
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

        </div>
    );
};

export default AllServiceShow;