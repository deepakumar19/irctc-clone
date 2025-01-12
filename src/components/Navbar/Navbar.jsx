import React from 'react'
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>IRCTC</h1>
            <ul className={styles.navLinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
    
  )
}

export default Navbar