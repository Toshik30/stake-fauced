import React from 'react'
import styles from './style.module.scss'
import { LOGO_CONTENT, MENU_FILLING } from 'src/data/routs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h3>{LOGO_CONTENT}</h3>
        <div className={styles.footer__ctn}>
          <nav className={styles.nav}>  
            <ul>
              {MENU_FILLING.map(({text, href, type}, index) => (
                <li key={index}>
                  <a href={href} type={type}>{text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.socialMedia}>
              <div className={styles.socialMedia__item}></div>
              <div className={styles.socialMedia__item}></div>
              <div className={styles.socialMedia__item}></div>
          </div>
        </div>
        <div className={styles.created}>
              <p>© 2022 Stake Faucet. All rights reserved</p>
              <p>Designed by Kapch0niy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer