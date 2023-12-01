import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)

    }
    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle, signInWithFacebook }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;