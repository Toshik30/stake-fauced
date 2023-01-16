import React from 'react'
import { FunctionComponent } from 'react'
// import menuData from '../../../data/routs.json'
import styles from './style.module.scss'
type MenuDataItem = Record<string, string | boolean>
const menuData: MenuDataItem[] = [
  {
      "text": "How to get",
      "href": "#howtoget",
      "type": "anchor",
      disabled: true,
  },
  {
      "text": "About",
      "href": "#about",
      "type": "anchor"
  },
  {
      "text": "Statistics",
      "href": "#statistics",
      "type": "anchor"
  },
  {
      "text": "Reviews",
      "href": "#reviews",
      "type": "anchor"
  },
  {
      "text": "FAQ",
      "href": "#faq",
      "type": "anchor"
  }
]
const Header: FunctionComponent = () => {
  return (
    <div className='container'>
      <nav>  
        <ul className={styles.navigation}>
           {menuData.map(({text, href, type}, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header