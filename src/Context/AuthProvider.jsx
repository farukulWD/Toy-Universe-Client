import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    

    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
      return signInWithPopup(auth,googleProvider)  
    }

    const loginUser = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
          setUser(currentUser);
          setLoader(false);
        });
        return () => {
          return unsubscribe;
        };
      }, []);
    


    const authInfo={
        user,
        loader,
        loginUser,
        createUser,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;