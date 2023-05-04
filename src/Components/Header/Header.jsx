import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {

  const {user,logOut}=useContext(AuthContext)
const handleLogout=()=>{
  logOut()
  .then(() => {''
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    
    console.log(error);
  });
}

  return (
    <nav className='h-16 bg-slate-900 text-white
    flex justify-between items-center px-20  '>
  <img className=' cursor-pointer' src={logo} alt="" />
 <div className='no-underline flex font-medium'>
  <Link className=' ml-5 hover:text-orange-400' to="/">Shop</Link>
  <Link className=' ml-5 hover:text-orange-400' to="/order">Order</Link>
  <Link className=' ml-5 hover:text-orange-400' to="/inventory">Inventory</Link>
  <Link className=' ml-5 hover:text-orange-400' to="/login">Log-in</Link>
  <Link className=' ml-5 hover:text-orange-400' to="/signup">Sign-up</Link>
  {
    user && <span className='mx-4  text-red-500'> Welcome
    
   <span className='mx-4 text-amber-500'> {user.email}</span>
 <button onClick={handleLogout} className='px-3 py-1 rounded-xl bg-green-200 text-black font-semibold' > 
 Log-out </button>
    </span> 
  }
 </div>
    </nav>
  );
};

export default Header;