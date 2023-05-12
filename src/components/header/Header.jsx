import React from 'react'
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D5hA5ElxTG_hj7eXq1Pu_dTAPYxLuAnicQ&usqp=CAU" alt="" />
      </div>
      <nav className={styles.header_nav}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => isActive ? 'activeLink' : ''}>history</NavLink>
          </li>
          <li>
            <NavLink to="/video" className={({ isActive }) => isActive ? 'activeLink' : ''}>video</NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={({ isActive }) => isActive ? 'activeLink' : ''} >donate</NavLink>
          </li>
        </ul>
      </nav>
      <Link to='/login'>
      <button>администратор</button>
      </Link>
    </header>
  )
}

export default Header