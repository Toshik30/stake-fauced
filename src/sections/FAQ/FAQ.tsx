import React from 'react'
import styles from './style.module.scss'
import { faqCtn, accordionCtn } from './faqCtn'
import Accordion from './Accordion'

const {heading, description} = faqCtn
const FAQ = () => {
  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.faq__ctn}>
          <div className={styles.faq__ctn__text}>
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
          <div>
            {accordionCtn.map(({name, content}, index) => (
              <Accordion key={index} head={name} desc={content}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ