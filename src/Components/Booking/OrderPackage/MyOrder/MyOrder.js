import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders , setOrder]= useState([]);

    const [isDeleted, setDeleted] = useState(null);
    
    const email = `${user.email}`;
    console.log(user)
    useEffect(() => {
        fetch(`https://frozen-bayou-03992.herokuapp.com/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [isDeleted])

   console.log(orders)


// DELETED 

   const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are You Deleted This Order?');
    if (proceed) {
        fetch(`https://frozen-bayou-03992.herokuapp.com/deleteOrder/${id}`, {
        method: 'DELETE',
        headers: {
            content: 'application/json'
        }
    }).then(res => res.json())
        .then(result => {
            if (result.acknowledged) {
                setDeleted(true)
                console.log(result.data)
                alert('Deleted successfully');
               
            } else{
                setDeleted(false)
            }
           
        })
    // console.log(id);
    }
}
    return (
        <div>

            <h1 className='text-center'>My Order'S <span className='text-warning'> {orders.length}</span> </h1>



            {
               orders.map((order,index) => <div className='my-2'>
                    <div className='shadow mx-auto w-50  '>



                <div className='mx-auto w-50'>
                    <h1>Order: {index + 1}</h1>
                <h1>  {order.name }</h1>
                <p>Order Number :{order.number} </p>
                <p>Order: {order.status}</p>
<p>Client Email: {order.email}</p>

                </div>


<div className='text-center'>
<button className=''  onClick={() => handleDeleteOrder(order._id)} type="button" class="btn btn-danger">Delete</button>
<button type="button" class="btn btn-warning">Update</button>
</div>


                    </div>
                </div>)
            }



            
        </div>
    );
        }

export default MyOrder;