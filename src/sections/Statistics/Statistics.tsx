import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { STATISTIC_CTN } from './sraticticCtn'

const {claims, users, earned} = STATISTIC_CTN

const Statistics = () => {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 242)
      clearInterval(interval)
    }, 10 )
    if(number >= claims.amount) {
      clearInterval(interval)
    }
    
  },[number])
  return (
    <section className={styles.statistic} id='statistics'>
      <div className="container">
          <h2>{ STATISTIC_CTN.heading}</h2>
          <div  className={styles.statistic__ctn}>
            <div className={styles.statistic__ctn__text}>
              {Object.values([claims, users, earned]).map((item,index) => (
                <div key={index} className={styles.statistic__ctn__text__item}>
                    <strong className='white'>{item.amount}</strong>
                    <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.statistic__ctn__img}></div>
          </div>
      </div>
    </section>
  )
}

export default Statistics