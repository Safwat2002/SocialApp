import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const userData = useSelector(state=>state.user.userData);

    if(userData){
        return (<Navigate to={"/"} />)
    }

    return (children)
}
