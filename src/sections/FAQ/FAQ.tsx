import React, { FunctionComponent } from 'react'
import styles from './style.module.scss'
import { faqCtn, accordionCtn } from './faqCtn'
import Accordion from './Accordion'

const {heading, description} = faqCtn

const FAQ: FunctionComponent = () => {
  return (
    <section className={styles.faq} id='faq'>
      <div className="container">
        <div className={styles.faq__ctn}>
          <div className={styles.faq__ctn__text}>
            <h1>{`${heading.split(' ')[0]} ${heading.split(' ')[1]} `} <span>{heading.split(' ')[2]}</span></h1>
            <p>{description}</p>
          </div>
          <div className={styles.faq__ctn__accordion}>
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