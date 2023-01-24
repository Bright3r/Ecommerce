import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore'

// React imports
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useContext(AuthContext)

    const signup =  async (name, email, password) => {
        setIsPending(true)
        setError(null)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error("Could not Sign Up")
            }

            await setDoc(doc(db, 'users', res.user.uid), {
                name,
                email
            })

            dispatch({ type: 'LOGIN', payload: res.user })

            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (err) {
            if (!isCancelled) {
                setError(err)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {

        return () => setIsCancelled(true)

    }, [])

    return { signup, error, isPending }

}