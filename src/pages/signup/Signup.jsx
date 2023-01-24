import styles from './Signup.module.css'

// React imports
import { useState } from 'react';

// Hooks
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signup, error, isPending } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name, email, password)

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <h2>Sign Up:</h2>

                <label className={styles.label}>
                    <span>Full Name:</span>
                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </label>

                <label className={styles.label}>
                    <span>Email:</span>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </label>

                <label className={styles.label}>
                    <span>Password:</span>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </label>

                <button className={styles['login-btn']}>Sign Up</button>

            </form>
        </div>
    );
}
 
export default Signup;