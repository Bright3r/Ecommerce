import { useContext, useEffect, useState } from "react"
import { auth } from "../firebase/config"
import { AuthContext } from "../context/AuthContext"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)
    const { dispatch } = useContext(AuthContext)

    const logout = async () => {
        setIsPending(true)
        setError(null)

        try {
            await auth.signOut()
            dispatch({ type: 'LOGOUT' })

            if (!isCancelled) {
                setIsPending(false)
            }
        } catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    })

    return { logout }
}