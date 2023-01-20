import React from 'react'
import styles from './style.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper";
import { REVIEWS_CTN } from './reviewsCtn'
import 'swiper/css'
import 'swiper/css/navigation'

const {heading, btnText} = REVIEWS_CTN
const slides = Object.values(REVIEWS_CTN.slide)

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.reviews__ctn}>
         
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            navigation = {true}
          >
            <h2>{heading}</h2>
            {slides.map(({name, description, src1},index) => (
              <SwiperSlide className={styles.customSlide} key={index} style={{background: `url(${src1})`}} >
                <div className={styles.customSlide__ctn}>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <button>{btnText}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reviews