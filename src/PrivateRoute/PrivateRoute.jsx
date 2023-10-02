import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {


  const {user,loading}=useAuth()
  console.log(loading)

  if(loading) return <h1 className='text-5xl'>Loading</h1>

  if (!user){
    return <Navigate to='/login'></Navigate>
  }
  return children
};

export default PrivateRoute;