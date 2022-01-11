import React, { useEffect, useState } from 'react';
import AllOrderShow from './AllOrderShow/AllOrderShow';

const AllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    },[])
    return (
        <div>
            <div>
            <h1 className='text-center text-danger'>All Orders  {allOrders.length} </h1>

{
    allOrders.map((allOrder,index) =>
      <div>
   
   {/* <h1 className=''>Order {index} </h1>  */}
        <AllOrderShow key={allOrder._id} allOrder={allOrder} index={index}  ></AllOrderShow>
      </div>
       
    )
}


            </div>
        </div>
    );
};

export default AllOrder;