import React from 'react'
import styles from "./Navbar.module.css";
import { Link, Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
        <>
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>IRCTC</h1>
            <ul className={styles.navLinks}>
                <li><Link to="/" className={styles.link}>Home</Link></li>
                <li><Link to="/login" className={styles.link}>Login</Link></li>
                <li><Link to="/register" className={styles.link}>Register</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    
  )
}

export default Navbar