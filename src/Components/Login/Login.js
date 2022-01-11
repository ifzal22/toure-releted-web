import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import initializeFirebaseApp from '../Firebase/Firebase.innt';
import useAuth from '../Hooks/useAuth';
import './Login.css';



initializeFirebaseApp()
const Login = () => {
    const { LogingWidthGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/'


    const handelGoogleLOgin = () =>{
        LogingWidthGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        
        <div  className='' >
           <div className='mx-auto LOGIN'>
           <h1 className='text-center'>Google Login</h1>

<div className='mx-auto text-center my-5'>
<button onClick={handelGoogleLOgin} type="button" class="btn btn-danger"><i class="fab fa-google"></i></button>
</div>
           </div>
        </div>
    );
};

export default Login;