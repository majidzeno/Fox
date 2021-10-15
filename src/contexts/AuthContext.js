import React, { useContext, useState, useEffect } from 'react'
import {
    auth,
    createUser,
    signInUser,
    resetPassword,
    changeEmail,
    changePassword,
    changeProfile
} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp(email, password){
        return createUser(auth, email, password)
    }

    function login(email, password){
        return signInUser(auth, email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetUserPassword(email){
        return resetPassword(auth, email)
    }

    function updateEmail(email){
        return changeEmail(auth.currentUser, email)
    }

    function updatePassword(password){
        return changePassword(auth.currentUser, password)
    }

    function updateProfile(name, imgURL){
        return changeProfile(auth.currentUser, {displayName: name, photoURL: imgURL})
    }

    function updateName(name){
        return changeProfile(auth.currentUser, {displayName: name})
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp,
        login,
        logout,
        resetUserPassword,
        updateEmail,
        updatePassword,
        updateProfile,
        updateName,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
