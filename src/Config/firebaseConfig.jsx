// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2UPX83F_17kkQaQ8ZyB-1L-BmY9oLts4",
  authDomain: "react-glasses-d4dc5.firebaseapp.com",
  projectId: "react-glasses-d4dc5",
  storageBucket: "react-glasses-d4dc5.appspot.com",
  messagingSenderId: "199942216712",
  appId: "1:199942216712:web:f716fd0ec6e68376e385bd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
