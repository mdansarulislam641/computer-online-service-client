import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    // user register
    const userRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user with email and password
    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out user
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // user observer
  useEffect(()=>{
    const unSubsCribe =  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unSubsCribe()
  },[])

    const authInfo = {
        user,loading,userRegister,logInUser,signOutUser
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;