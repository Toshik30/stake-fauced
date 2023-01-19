import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from './style.module.scss'
type Props = {
    minutes: number,
    seconds: number
}
const Timer: FunctionComponent<Props> = ({minutes = 0, seconds = 0 }) => {
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (over) return;
        if (m === 0 && s === 0) {
          setOver(true);
        } else if (s === 0) {
          setTime([m - 1, 59]);
        } else {
          setTime([m, s - 1]);
        }
      };
 
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    return (
        <div className={styles.countDown + ' white'}>
            <span>{m.toString().padStart(2, '0').split('')[0]}</span>
            <span>{m.toString().padStart(2, '0').split('')[1]}</span>
            :
            <span>{s.toString().padStart(2, '0').split('')[0]}</span>
            <span>{s.toString().padStart(2, '0').split('')[1]}</span>
        </div>
      );
}

export default Timer