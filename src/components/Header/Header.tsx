import ButtonPrimary from '@components/ui/ButtonPrimary'
import React, {useState, useEffect} from 'react'
import { FunctionComponent } from 'react'
import {LOGO_CONTENT, MENU_FILLING, CLAIM} from '../../data/routs'
import styles from './style.module.scss'


const Header: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    const handleWindowResize = () =>   setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () =>  window.removeEventListener('resize', handleWindowResize)
  })
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <h4>{LOGO_CONTENT}</h4>
          </div>
          <nav className={styles.nav}>  
            
            {windowWidth >= 1024 ?
            <ul>
            {MENU_FILLING.map(({text, href, type}, index) => (
              <li key={index}>
                <a href={href} type={type}>{text}</a>
              </li>
            ))}
            </ul> :
            <div className={styles.nav__mobile}>
              <div className={!showMenu ? styles.nav__mobile__burger : styles.nav__mobile__burger + ' ' + styles.active} onClick={handleShowMenu}>
                <span></span><span></span><span></span>
              </div>
              <div className={!showMenu ? styles.nav__mobile__menu : styles.nav__mobile__menu + ' ' + styles.active}>
                {MENU_FILLING.map(({text, href, type}, index) => (
                  <li key={index}>
                    <a href={href} type={type}>{text}</a>
                  </li>
                ))}
              </div>
            </div>
            
            }
            <ButtonPrimary text={CLAIM} customStyle="btn small" />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header