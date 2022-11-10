import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)

    // google sign in user
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

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
        localStorage.removeItem('online-service')
        return signOut(auth)
    }

    // update user Profile image and name
    const UpdateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
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
        user,
        loading,
        googleSignIn,
        userRegister,
        logInUser,
        signOutUser,
        UpdateUserProfile
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;