// React imports
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// Firebase
import { sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)
    const { dispatch } = useContext(AuthContext)
 

    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error("Could not log in")
            }

            dispatch({ type: 'LOGIN', payload: res.user })
            console.log(res.user)

            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }

        } catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    
    return { login }
}