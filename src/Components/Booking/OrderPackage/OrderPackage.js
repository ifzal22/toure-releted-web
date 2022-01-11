import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './OrderPackage.css';

const OrderPackage = ({service}) => {
    const {register, reset, handleSubmit } = useForm();
    const {user}= useAuth();

    const onSubmit =(data)=>{

data.status = "pending";
data.email = `${user?.email}`;


fetch('http://localhost:5000/orders',{
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
})
.then((res) => res.json())
            .then((result) => {
           
                if (result.insertedId) {
                  
                    alert('Booking succesfull')
                    reset();
                }
            })

 console.log(data);
    /*     axios.post('http://localhost:5000/orders',data)
        .then(res =>{
            if (res.data.insertedId) {
                console.log(res.data)
                alert('added successfully');
                reset();
            }
         
        }) */
    }
    return (
        <div className=''>
            <div className="from-section">
                <h3 className="fw-bold">Purchase Package</h3>
                <form className='shadow' onSubmit={handleSubmit(onSubmit)}>
{/* <div className='mx-auto AUTOimg'>
<img  src={service?.image} alt=""
     {...register("name", { required: true })}/>
</div> */}
                    <input
                       value={user?.displayName}
                        {...register("name", { required: true })}

                    /><br />
                    <input
                      value={user?.email}
                        {...register("email", { required: true })}
                    /><br />
                    <input
                        value={service?.packageName}
                        {...register("name", { required: true })}

                    /><br />
                    <input
                        placeholder="Your Number"
                        {...register("number", { required: true })}
                    />

                    <br />

                    <br />
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderPackage;