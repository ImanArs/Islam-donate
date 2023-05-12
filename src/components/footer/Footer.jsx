import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D5hA5ElxTG_hj7eXq1Pu_dTAPYxLuAnicQ&usqp=CAU" alt="" />
      </div>
      <div className={styles.footer_mid}>
        <ul>
          <li>О нас</li>
        </ul>
      </div>
      <div className={styles.footer_right}>
        <ul>
          <li>О нас</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer