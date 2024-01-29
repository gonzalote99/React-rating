import './ThankYou.css';

const ThankYou = (props) => {
  return(
    <div className='thankYou'>
    <div className='thankYou_image-div'>
    <img src={'https://raw.githubusercontent.com/devvanu/interactive-rating-component/53f9f53818a3c285f5df96cb7fe70aa1c5b55e5b/src/assets/illustration-thank-you.svg'} />
      
    </div>
      <p className='thankYou_selected'>you selected {props.ratingPoint} of 5</p>
      <h2 className='thankYou_title'>thank you</h2>
      <p className='thankYou_appreciate'>we appreciate support</p>
    </div>
  )
}

export default ThankYou;