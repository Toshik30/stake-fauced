import React, { FunctionComponent } from 'react'
import styles from './style.module.scss'
import ButtonPrimary from '@components/ui/ButtonPrimary'
import { STEPS_POMOUTION } from './aboutCtn'

const {heading,text, text1,textBtn } = STEPS_POMOUTION

const About: FunctionComponent = () => {
  return (
    <section className={styles.about}>
      <div className="container">
          <div className={styles.promoution}>
              <div className={styles.promoution__text}>
                  <h2>{heading}</h2>
                  <p>{text}</p>
                  <p>{text1}</p>
                  <ButtonPrimary text={textBtn} customStyle="btn"/>
              </div>
              <div className={styles.promoution__img}></div>
          </div>
      </div>
    </section>
  )
}

export default About