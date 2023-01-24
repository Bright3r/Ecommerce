import styles from './Login.module.css'

// React imports
import { useState } from 'react';

// Hooks
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <h2>Login:</h2>

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

                <button className={styles['login-btn']}>Login</button>

            </form>
        </div>
    );
}
 
export default Login;