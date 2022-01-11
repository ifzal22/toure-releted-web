import React from 'react';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { LogingWidthGoogle,user } = useAuth();
    console.log( user)
    return (
        
        <div  className='' >
           <div className='mx-auto LOGIN'>
           <h1 className='text-center'>Google Login</h1>

<div className='mx-auto text-center'>
<button onClick={LogingWidthGoogle} type="button" class="btn btn-danger"><i class="fab fa-google"></i></button>
</div>
           </div>
        </div>
    );
};

export default Login;