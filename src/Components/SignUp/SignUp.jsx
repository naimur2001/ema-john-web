import React, { useContext, useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSoccerBall } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
const [er,setEr]=useState('')
const {createUser}=useContext(AuthContext)
const handleSignup=(event)=>{
  event.preventDefault();
  const form=event.target;
  const  email=form.email.value;
  const  password=form.password.value;
  const  con_password=form.con_password.value;
  console.log(email,password,con_password);
setEr('')

if (password !== con_password) {
  setEr("password no matched.")
  return;
  
}
else if (password.length<6) {
  setEr("password picchi.");
  return;
}
createUser(email,password)
.then(result=>{
  const loggedUser =result.user;
  console.log(loggedUser);
  form.reset();
})
.catch(error=>{
  console.log(error);
  setEr(error.message)
})
}




  return (
    <div>
      <div className='form-container' >
       
       <div className="hero  min-h-screen bg-base-200">
 <div className="hero-content lg:w-96 flex-col ">
 <h2 className='form-title text-center text-3xl font-semibold text-cyan-600 '> Sign Up</h2>
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleSignup}>
    <div  className="card-body">
       {/* <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="name" name='name' placeholder="name" className="input input-bordered" required />
       </div> */}
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" name='email' placeholder="@email.com" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" name='password' placeholder="password" className="input input-bordered" required />
    
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Confirm Password</span>
         </label>
         <input type="password" name='con_password' placeholder="confirm password" className="input input-bordered" required />
    
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-warning border-0">SignUp</button>
         
       </div>
       <div className="form-control mt-6">
      
       <button  className="btn bg-slate-200 text-black hover:text-amber-500 ">  <FontAwesomeIcon className='mx-5' icon={faSoccerBall}></FontAwesomeIcon> Sign Up Google</button>
         
       </div>
       <div className="form-control">
       <p className='text-center font-bold' ><small>Already hav an account? </small> <Link to='/login'> Go to login</Link></p>
       </div>
       <h1 className='text-center text-red-600'>{er}</h1>
     </div>
    </form>
   </div>
 </div>

</div>
     </div>
    </div>
  );
};

export default SignUp;