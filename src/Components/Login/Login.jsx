import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSoccerBall } from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  
const {signIn}=useContext(AuthContext);
const [er,setEr]=useState('');
const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathname || '/';
const [show,setShow]=useState(false);
const handleSignin=(event)=>{
  event.preventDefault();
  const form=event.target;
  const  email=form.email.value;
  const  password=form.password.value;
  
  console.log(email,password);
setEr('')



signIn(email,password)
.then(result=>{
  const loggedUser =result.user;
  console.log(loggedUser);
  form.reset();
  navigate(from,{replace:true});
})
.catch(error=>{
  console.log(error);
  setEr(error.message)
})
}


  return (
    <div>
      <div className='form-container' >
       
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content lg:w-96 flex-col ">
  <h2 className='form-title text-center text-3xl font-semibold text-cyan-600 '> Log In</h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handleSignin} >

     <div className="card-body">
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
          <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
          <p onClick={()=>{setShow(!show)}}><small> {
            show ? <span>hide password</span> :<span>show password</span>
          }</small></p>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning border-0">LogIn</button>
          
        </div>
        <div className=" flex justify-center mt-3">
            <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
          </div>
        <div className="form-control mt-6">
       
        <button className="btn bg-slate-200 text-black hover:text-amber-500 ">  <FontAwesomeIcon className='mx-5' icon={faSoccerBall}></FontAwesomeIcon> Login with Google</button>
          
        </div>
      <div className="form-control">
      <p className='text-center font-bold ' ><small>New to Ema-John?  </small><Link to='/signup'> Create an account</Link></p>
      </div>
      </div>
      <h1 className='text-center text-red-600'>{er}</h1>
     </form>
      
    </div>
   
  </div>

</div>
      </div>
      
    </div>
  );
};

export default Login;