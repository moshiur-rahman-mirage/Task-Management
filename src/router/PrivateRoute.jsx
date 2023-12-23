import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Privateroutes = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if (user?.email) {
        return children;
    }
    return (
       <Navigate state={location.pathname} to="/login" replace></Navigate>
    );
};

export default Privateroutes;