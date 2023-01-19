import ButtonPrimary from '@components/ui/ButtonPrimary'
import React from 'react'
import { FunctionComponent } from 'react'
import {LOGO_CONTENT, MENU_FILLING, CLAIM} from '../../data/routs'
import styles from './style.module.scss'

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <h4>{LOGO_CONTENT}</h4>
        </div>
        <nav className={styles.nav}>  
          <ul>
            {MENU_FILLING.map(({text, href, type}, index) => (
              <li key={index}>
                <a href={href} type={type}>{text}</a>
              </li>
            ))}
          </ul>
          <ButtonPrimary text={CLAIM} customStyle="btn small" />
        </nav>
        </div>
    </div>
    </header>
  )
}

export default Header