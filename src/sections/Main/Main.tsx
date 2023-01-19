import ButtonPrimary from '@components/ui/ButtonPrimary'
import React, { FunctionComponent } from 'react'
import { MAIN_SECTION } from './mainCtn'
import styles from './style.module.scss'
import Timer from './Timer';


const {heading, description, nameBtn, timerDescription, timerPromoution} =  MAIN_SECTION;

const Main: FunctionComponent = () => {
    return (
        <section className={styles.main}>
            <div className="container flex-between">
                <div className={styles.main__text}>
                    <h1 className='white'>{heading}</h1>
                    <p>{description}</p>
                    <ButtonPrimary text={nameBtn} customStyle="btn"/>
                </div>
                <div className={styles.main__ctn}>
                    <div className={styles.main__ctn__timer}>
                        <div className={styles.main__ctn__clock}>
                            <Timer minutes={10} seconds={0}/>
                        </div>
                        <p className='white'>{timerDescription}</p>
                        <span>{timerPromoution}</span>
                    </div>
                    <div className={styles.blurRound + ' ' + styles.top}></div>
                    <div className={styles.blurRound + ' ' + styles.bottom}></div>
                </div>
            </div>
        </section>
    )
}

export default Main