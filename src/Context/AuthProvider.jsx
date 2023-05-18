import React, { createContext, useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(true);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const authInfo={
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;