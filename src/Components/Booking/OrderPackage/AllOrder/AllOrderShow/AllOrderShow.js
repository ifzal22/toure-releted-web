import React from 'react';
import './AllOrderShow.css';

const AllOrderShow = ({allOrder,index}) => {
  
  
  
    const { _id, name, price, email, about, image } = allOrder;

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are You Deleted This Order?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
               console.log(result)
               if (result.acknowledged) {
                console.log(result.data)
                alert('Deleted successfully');
               
            }
            })
        // console.log(id);
        }
    }



    
    return (
        <div>
            <div className='container mx-auto'>

<div className='row shadow d-flex my-2'>


<div className='col-md-4'>
<h1 className='text-warning'>Order {index} </h1> 

<div>
    <h3  >{name} </h3>
<p>
  {email}
</p>
</div>
</div>

<div className='BUTTON'>
<button  onClick={() => handleDeleteOrder(allOrder._id)} type="button" class="btn btn-danger">Delete</button>
<button type="button" class="btn btn-warning">Update</button>
</div>

</div>




                
            </div>
        </div>
    );
};

export default AllOrderShow;