import {useState} from 'react';
import RatingContainer from './components/Rating/RatingContainer';
import ThankYou from './components/ThankYou/ThankYou';
import './App.css';

const App = () => {
  const [ratingPoint, setRatingPoint] = useState(0);

  
  const ratingPointHandler = (point) => {
    setRatingPoint(point);

    
  }

  return(
    <div className='app'>
      {ratingPoint == 0 && 
        <RatingContainer ratingPoint={ratingPointHandler} />}
      {ratingPoint > 0 && <ThankYou ratingPoint={ratingPoint} />}
    </div>
  )
}
export default App;