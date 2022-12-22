import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser]= useState(null);
  const [loading, setLoadig] = useState(true);

   function createuser(email,password) {
     return createUserWithEmailAndPassword(auth, email, password);

  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
   })
    return () => {
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createuser,
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;