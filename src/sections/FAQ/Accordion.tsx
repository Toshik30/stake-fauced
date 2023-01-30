import React, { FunctionComponent, useState } from 'react'
import styles from './style.module.scss'
type Props = { 
    head: string,
    desc: string,
}
const Accordion: FunctionComponent<Props> = ({head, desc}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li className={styles.accordion__item}>
            <div className={styles.accordion__toggle} onClick={() => setIsActive(!isActive)}>
                <h3>{head}</h3>
                <span className={isActive ? styles.arrow + ' ' + styles.arrow__active : styles.arrow  }></span>
            </div>
            {isActive && <div className={styles.accordion__content}>{desc}</div> }
        </li>
    )
}

export default Accordion