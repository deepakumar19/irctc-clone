import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
    <Navbar/>
    <div className=''>
      <h2 className={styles.heading}>Book Your Train Ticket</h2>
      <form>
        <div className={styles.formGroup}>
        <label htmlFor="from" className={styles.formLabel}>From</label>
        <input type='text' id="from" placeholder='Enter Departure Station' className={styles.formControl}/>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="from" className={styles.formLabel}>To</label>
        <input type='text' id="to" placeholder='Enter Arrival Station' className={styles.formControl}/>
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="date" className={styles.formLabel}>Date</label>
        <input type='date' id="date" className={styles.formControl}/>
        </div>
        <div className={styles.formGroup}>
          <button className={styles.btn}>Search Trains</button>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Home