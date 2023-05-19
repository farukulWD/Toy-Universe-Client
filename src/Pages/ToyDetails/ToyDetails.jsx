import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ToyDetails = () => {
    const toy = useLoaderData()
    
    
    return (
        <div>
            <h2>This is Toy details pages {toy.name}</h2>
        </div>
    );
};

export default ToyDetails;