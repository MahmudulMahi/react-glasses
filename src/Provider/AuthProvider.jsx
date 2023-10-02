import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Config/firebaseConfig';

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

  const [user,setUser]=useState({})

  const [loading,setLoading]=useState(true)

  // login

  const googleLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  }
  const githubLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth, githubProvider)
  }

  // sing up
  const createUser=( email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signin=(email,password)=>{
    setLoading(true)
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
    setLoading(false)
    });
  },[])

  console.log(user)

  const authentications={
    googleLogin,
    createUser,
    signin,
    logOut,
    user,
    loading,
    githubLogin

  }



  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;