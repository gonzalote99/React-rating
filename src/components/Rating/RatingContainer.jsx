import Content from './Content';
import Rating from './Rating';

const RatingContainer = (props) => {
  return (
    <div>
      <Content />
      <Rating ratingPoint={props.ratingPoint} />
    </div>
  )
}

export default RatingContainer;