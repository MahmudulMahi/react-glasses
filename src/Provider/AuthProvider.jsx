import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../Config/firebaseConfig';

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

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

  const authentications={
    googleLogin,
    createUser,
    signin,

  }



  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;