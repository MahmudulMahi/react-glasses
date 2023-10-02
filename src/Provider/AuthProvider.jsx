import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Config/firebaseConfig';

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user,setUser]=useState({})

  // login

  const googleLogin=()=>{
   return signInWithPopup(auth, googleProvider)
  }

  // sing up
  const createUser=( email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logOut =() =>{
    return signOut(auth)
  }

  // grt current user /observe login 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    setUser(user)
    });
  },[])

  console.log(user)

  const authentications={
    googleLogin,
    createUser,
    signin,
    logOut,
    user

  }



  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;