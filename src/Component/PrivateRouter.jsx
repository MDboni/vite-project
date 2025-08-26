import React, { useContext } from 'react'
import { AuthContext } from './Context'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({Children}) => {
const {user,loading} = useContext(AuthContext)
const location = useLocation() ;

    if(loading){
            return <div className="text-center mt-10">Loading...</div>;
    }

    if(user){
        return Children
    }

  return <Navigate to="/Login" state={{from:location}} replace />
}

export default PrivateRouter