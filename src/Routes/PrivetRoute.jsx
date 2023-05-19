import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user,loader}=useContext(AuthContext)
    if (loader) {
       return <p>loading....</p>
    }
    if (user) {
        return children;
    }

    return <Navigate state={{from: location}}  to="/login" replace></Navigate>
};

export default PrivetRoute;