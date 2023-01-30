import React, {FunctionComponent} from 'react'
import styles from './style.module.scss';
import { STEPS_CTN, ABOUT_CURRENCY} from './stepsCtn';
import About from '@sections/About/About';

const {step1, step2, step3} = STEPS_CTN
const {head, description, advantage, advantage1} = ABOUT_CURRENCY

const HowToGet: FunctionComponent = () => {
  return (
    <section className={styles.steps} id='howtoget'>
      <div className="container">
          <h3>{STEPS_CTN.heading}</h3>
          <div className={styles.steps__block}>
            {Object.entries({step1, step2, step3}).map((step) =>  (
                <div className={styles.stepBlock} key={step[0]}>
                  <h4>{step[1].head}</h4>
                  <p>
                    <span>{step[1].text[0]} </span>
                    <span className='white'> {step[1].strong[0]}</span> 
                    <span> {step[1].text[1]}</span>
                    <span className='white'> {step[1]?.strong[1]}</span>
                  </p>
                  <strong className='startNow'>{step[1]?.stepNav}</strong>
                </div>
            ))}
          </div>
          <About/>
          <div className={styles.aboutCurrency}>
              <div className={styles.aboutCurrency__img}>
                <span className={styles.blur + ' ' + styles.top}></span>
                <span className={styles.blur + ' ' + styles.bottom}></span>
              </div>
              <div className={styles.aboutCurrency__text}>
                <h2>{head}</h2>
                <p>{description}</p>
                <div className={styles.aboutCurrency__text__list}>
                  <span>{advantage}</span>
                  <span>{advantage1}</span>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default HowToGet