import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.innt";





initializeFirebaseApp();
const useFirebaseApp = () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [error, setError] = useState("");




 // Google propap sign in
 const LogingWidthGoogle = () => {
    
    signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.massage)
        })
}

const unSubScribe = useEffect(()=>{
    onAuthStateChanged(auth ,(user)=>{
        if (user) {
            setUser(user)

        } else {
            setUser({})
        }
    })
    return () => unSubScribe
},[])

// LOG OUT
const handelLOgOut = () => {
    signOut(auth).then(() => {
        setUser({})
    }).catch((error) => {
        setError('');
    });
}
return{
    LogingWidthGoogle,
    user,
    setUser,
    error,
    handelLOgOut,
}
}
export default useFirebaseApp;