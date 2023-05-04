import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export  const AuthContext=createContext(null);


const auth=getAuth(app)
const AuthProvider = ({children}) => {
  const [user,SetUser]=useState(null);
  const [load,setLoad]=useState(true)
 
const createUser =(email,password)=>{
  setLoad(true)
 return createUserWithEmailAndPassword(auth, email,password)
}

const signIn =(email,password)=>{
  setLoad(true)
 return signInWithEmailAndPassword(auth, email,password)
}

const logOut=()=>{
  return signOut(auth)
}

useEffect(()=>{
  const unsubscribe=
  
    onAuthStateChanged(auth, (currentUser) => {
     SetUser(currentUser);
     setLoad(false)
    });
  return ()=>{
   return unsubscribe();
  }
},[])

const authInfo={
  user,
  load,
  createUser,
  signIn,
  logOut,

}
  return (
<AuthContext.Provider value={authInfo}>
  {children}
</AuthContext.Provider>
  );
};

export default AuthProvider;