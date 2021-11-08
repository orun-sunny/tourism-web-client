import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialization';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isloading,setIsloading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const joinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
            setIsloading(false);
        });
    }, [])
    return {
        auth,
        user,
        setUser,
        joinWithGoogle,
        logOut,
        isloading,
        setIsloading
    }
};

export default useFirebase;