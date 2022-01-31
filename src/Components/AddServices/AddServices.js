import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit,reset }=useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('https://frozen-bayou-03992.herokuapp.com/services',data)
        .then(res =>{
            if (res.data.insertedId) {
                console.log(res.data)
                alert('added successfully');
                reset();
            }
         
        })
    }
    return (
        <div className='shadow CONTAIN'>
            
   

            <div className="add-service MARGE shadow">
            <h2 className='text-center bg-denger'>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
            className="box2"
                
                {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea 
                className="shadow p-4 rounded-3"
                placeholder="your message"cols="10" rows=""{...register("description")}  />
                <input 
                className="box2"
                type="number" {...register("price")} placeholder="price" />
                <input
                className="box2" {...register("img")} placeholder="image url" />
                <input className="btn" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddServices;