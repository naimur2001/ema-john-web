import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {Navigate,useLocation} from 'react-router-dom';
const PrivateRoute = ({children}) => {
 const {user,load}=useContext(AuthContext);
 const location=useLocation()
 if (user) {
  return children
 }
 if (load) {
  return <div className='flex justify-center items-center relative '>
  <div className="  absolute top-44 radial-progress animate-spin text-orange-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}></div>

  </div>
 }
return  <Navigate to='/login' state={{from:location}} replace ></Navigate>; 


  

};

export default PrivateRoute;