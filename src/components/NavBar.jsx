import styles from './styles/NavBar.module.css'

// React imports
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

// Hooks
import { useLogout } from '../hooks/useLogout'

const NavBar = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const { user, dispatch } = useContext(AuthContext)
    const { logout, error, isPending } = useLogout()

    const handleNavPopout = (e) => {
        showDrawer ? setShowDrawer(false) : setShowDrawer(true)
    }

    const handleLogout = (e) => {
        logout()
    }

    const handleCart = (e) => {

    }

    return (
        <>
            <nav className={styles.navbar}>

                <div className={styles.logo}>
                    <NavLink to="/">
                        <img src={require=('assets/logo.avif')} alt="gfuel logo" />
                    </NavLink>
                </div>

                <div className={styles['mobile-nav']}>
                    <button onClick={handleCart} className={`material-symbols-outlined ${styles.cart}`}>
                            Shopping_Cart
                    </button>
                    <button onClick={handleNavPopout} className={`material-symbols-outlined ${styles.menu}`}>
                        Menu
                    </button>
                </div>
                
                <div className={styles['large-screen-nav']}>

                    <button onClick={handleCart} className={`material-symbols-outlined ${styles['nav-item']} ${styles.cart}`}>
                            Shopping_Cart
                    </button>
                    <NavLink to="/">
                        <span className={`material-symbols-outlined ${styles['nav-item']} ${styles.home}`}>
                            Home
                        </span>
                    </NavLink>

                    <NavLink to="/about"><span className={styles['nav-item']}>About</span></NavLink>
                    <NavLink to="/contact"><span className={styles['nav-item']}>Contact</span></NavLink>
                    {!user && (
                        <>
                            <NavLink to="/login"><span className={styles['nav-item']}>Login</span></NavLink>
                            <NavLink to="/signup"><span className={styles['nav-item']}>Signup</span></NavLink>
                        </>
                    )}
                    {user && (
                        <button onClick={handleLogout} className={styles['logout-btn']}>
                            <span className={styles['nav-item']}>Logout</span>
                        </button>
                    )}
                    
                </div>
            </nav>

            {showDrawer && (
                <div className={styles.drawer}>
                    <NavLink to="/about"><div className={styles['drawer-item']}>About</div></NavLink>
                    <NavLink to="/contact"><div className={styles['drawer-item']}>Contact</div></NavLink>
                    {!user && (
                        <>
                         <NavLink to="/login"><div className={styles['drawer-item']}>Login</div></NavLink>
                         <NavLink to="/signup"><span className={styles['drawer-item']}>Signup</span></NavLink>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
 
export default NavBar;