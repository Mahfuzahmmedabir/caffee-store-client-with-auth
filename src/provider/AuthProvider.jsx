import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState, } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [lodaing, setLoding] = useState(true)

  const createUser = (email, password) => {
    setLoding(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginWithEmailAndPassword = (email, password) => {
    // setLoding(true)
    return signInWithEmailAndPassword(auth, email,password)
  }

  const authInfo = {
    createUser,
    loginWithEmailAndPassword,
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;