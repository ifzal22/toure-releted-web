import React, { useEffect, useState } from 'react';

const TravelProducts = () => {
   
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-hollows-30656.herokuapp.com/travelProducts')
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 6)));
    },[])

    return (
        <div>
            
            { 
services.length ===0 ? <div className="spinner-border text-danger " role="status">
<span className="sr-only text-center">Loading...</span>
</div>

:
<div className='row container mx-auto '>
{
    services.map(service =>
      <div  key={service._id}>

      </div>  )
}

</div>
              }


        </div>
    );
};

export default TravelProducts;