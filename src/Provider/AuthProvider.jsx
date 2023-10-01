import React, { createContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Config/firebaseConfig';

export const AuthContext =createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const googleLogin=()=>{
   return signInWithPopup(auth, googleProvider)
  }

  const authentications={
    googleLogin
  }



  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;