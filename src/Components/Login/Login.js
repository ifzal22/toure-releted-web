import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import initializeFirebaseApp from '../Firebase/Firebase.innt';
import useAuth from '../Hooks/useAuth';
import './Login.css';



initializeFirebaseApp()
const Login = () => {
    const { LogingWidthGoogle , user,
        setUser,} = useAuth();

        const history= useHistory()
        const location = useLocation()
        const url= location.state?.from || "/home"

    
    const handelGoogleLOgin = () =>{
        LogingWidthGoogle()
        .then(result =>{
            console.log(result)
            // const user = userCradential.user;
            setUser(result.user)
            history.push(url)
        })
    }
    return (
        
        <div  className='' >
           <div className='mx-auto LOGIN'>
           <h1 className='text-center bg-white shadow-lg p-4 '>Google Login</h1>

<div className='mx-auto text-center my-10'>
<button onClick={handelGoogleLOgin} type="button" className="btn btn-white shadow-lg my-5 p-5 BNT"><i className="fab fa-google"></i></button>
</div>
           </div>
        </div>
    );
};

export default Login;