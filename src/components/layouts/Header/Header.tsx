import React from 'react'
import menuData from '../../../data/routs.json'
import styles from './style.module.scss'
const Header = () => {
  return (
    <div className='container'>
      <nav>
        
        <ul className={styles.navigation}>
           {menuData.menu.map(({text, href, type}, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header