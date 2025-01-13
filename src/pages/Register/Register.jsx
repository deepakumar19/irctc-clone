import React, { useState } from 'react'
import styles from "./Register.module.css";
import { useForm } from '../../hooks/useForm';
const Register = () => {
    const { formData, handleChange } = useForm();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor='username' className={styles.formLabel}>Full Name</label>
                    <input id="userName" value={formData.userName} onChange={handleChange} type="text" className={styles.formControl} required/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='email' className={styles.formLabel}>Email</label>
                    <input id="email" value={formData.email} onChange={handleChange} type="text" className={styles.formControl} required/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='password' className={styles.formLabel}>Password</label>
                    <input id="password" value={formData.password} onChange={handleChange} type="password" className={styles.formControl} required/>
                </div>
                <div className={styles.formGroup}>
                    <button type="submit" className={styles.btn}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register