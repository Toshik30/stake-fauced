import React from 'react'
import styles from './style.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { REVIEWS_CTN } from './reviewsCtn'
import 'swiper/css'
import { url } from 'inspector'


const {heading, btnText} = REVIEWS_CTN
const slides = Object.values(REVIEWS_CTN.slide)
console.log(slides.map((item) => item))

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.reviews__ctn}>
          <h2>{heading}</h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            {slides.map(({name, description, src1},index) => (
              <SwiperSlide className={styles.customSlide} key={index} style={{background: `url(${src1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} >
                <h4>{name}</h4>
                <p>{description}</p>
                <button>{btnText}</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reviews