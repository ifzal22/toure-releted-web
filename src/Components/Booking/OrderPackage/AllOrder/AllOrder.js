import React, { useEffect, useState } from 'react';
import AllOrderShow from './AllOrderShow/AllOrderShow';

const AllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(()=>{
        fetch('https://frozen-bayou-03992.herokuapp.com/allOrders')

        
        .then(res => res.json())
        .then(data => setAllOrders(data));
    },[isDeleted])
    return (
        <div>
            <div>
            <h1 className='text-center text-danger'>All Orders  {allOrders.length} </h1>

{
    allOrders.map((allOrder,index) =>
      <div>
   
   {/* <h1 className=''>Order {index} </h1>  */}
        <AllOrderShow key={allOrder._id} allOrder={allOrder} index={index} setIsDeleted={setIsDeleted}  ></AllOrderShow>
      </div>
       
    )
}


            </div>
        </div>
    );
};

export default AllOrder;