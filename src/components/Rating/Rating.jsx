import { useState } from 'react';

import styles from './Rating.module.css';

const Rating = (props) => {

  const [clickedPoint, setClickedPoint] = useState(0);

  const ratingPointHandler = (event) =>{
    setClickedPoint(event.target.textContent);
  }

  const submitHandler = () => {
    props.ratingPoint(clickedPoint);
  }

  return (
    <div className="rating">
        <div className={styles.points}>
            <button className={styles['point-number']} onClick={ ratingPointHandler }>1</button>
            <button className={styles['point-number']} onClick={ ratingPointHandler }>2</button>
            <button className={styles['point-number']} onClick={ ratingPointHandler }>3</button>
            <button className={styles['point-number']} onClick={ ratingPointHandler }>4</button>
            <button className={styles['point-number']} onClick={ ratingPointHandler }>5</button>
        </div>
        <button className={styles.btn} type="submit" onClick={ submitHandler } >SUBMIT</button>
    </div>
  )
}

export default Rating