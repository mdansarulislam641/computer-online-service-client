import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='h[100hv] flex justify-center items-center'>
            Loading.......
        </div>
    }
   if(user){
    return children ;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;